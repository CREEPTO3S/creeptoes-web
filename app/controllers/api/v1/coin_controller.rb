module Api
  module V1
    class CoinController < ApplicationController
      before_action :authenticate_user

      def create
        ActiveRecord::Base.transaction do
          coin = Coin.new(symbol: coin_params[:symbol], name: coin_params[:name])
          user_coin = UserCoin.new(user: current_user, coin: coin, amount: params[:amount])

          coin.save!
          user_coin.save!
        end

        render json: serialized_user, status: :created
      rescue ActiveRecord::RecordInvalid => e
        coin = Coin.find_by(symbol: coin_params[:symbol], name: coin_params[:name])
        user_coin = UserCoin.find_by(user: current_user, coin: coin)

        if user_coin&.update(amount: params[:amount])
          render json: serialized_user, status: :created
        elsif user_coin&.errors
          render json: { errors: user_coin.errors.full_messages }, status: :unprocessable_entity
        else
          render json: { errors: [e] }, status: :unprocessable_entity
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
