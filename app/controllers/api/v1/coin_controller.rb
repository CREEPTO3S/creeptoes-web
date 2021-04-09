module Api
  module V1
    class CoinController < ApplicationController
      before_action :authenticate_user

      def index
        render json: serialized_user
      end

      def create
        ActiveRecord::Base.transaction do
          coin = Coin.find_by(symbol: coin_params[:symbol], name: coin_params[:name])

          unless coin
            coin = Coin.new(symbol: coin_params[:symbol], name: coin_params[:name])
            coin.save!
          end

          user_coin = UserCoin.find_by(user: current_user, coin: coin)

          unless user_coin
            user_coin = UserCoin.new(user: current_user, coin: coin, amount: params[:amount])
            user_coin.save!
          end

          user_coin.update(amount: params[:amount])
        end

        render json: serialized_user, status: :created
      rescue ActiveRecord::RecordInvalid => e
        render json: { errors: [e] }, status: :unprocessable_entity
      end

      def destroy
        coin = Coin.find_by(symbol: coin_params[:symbol], name: coin_params[:name])
        user_coin = UserCoin.find_by(user: current_user, coin: coin)

        if user_coin&.destroy
          head :no_content
        else
          render json: { errors: ['Delete failed'] }, status: :unprocessable_entity
        end
      end

      private

      def coin_params
        params.fetch(:coin, {}).permit(:symbol, :name)
      end

      def serialized_user
        options = { include: [:user_coins] }
        UserSerializer.new(current_user, options).serializable_hash
      end
    end
  end
end
