module Api
  module V1
    class CoinController < ApplicationController
      before_action :authenticate_user

      def index
        render json: serialized_coin(current_user.coins.select('*, user_coins.amount as amount'))
      end

      def create
        coin = Coin.find_by(symbol: coin_params[:symbol], name: coin_params[:name])
        user_coin = UserCoin.find_by(user: current_user, coin: coin)

        ActiveRecord::Base.transaction do
          unless coin
            coin = Coin.new(symbol: coin_params[:symbol], name: coin_params[:name])
            coin.save!
          end

          if user_coin
            user_coin.update(amount: params[:amount])
          else
            user_coin = UserCoin.new(user: current_user, coin: coin, amount: params[:amount])
            user_coin.save!
          end
        end

        render json: serialized_user_coin(user_coin), status: :created
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

      def serialized_coin(coin)
        CoinSerializer.new(coin).serializable_hash
      end

      def serialized_user_coin(user_coin)
        UserCoinSerializer.new(user_coin).serializable_hash
      end
    end
  end
end
