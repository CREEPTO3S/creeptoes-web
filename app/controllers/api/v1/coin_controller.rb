module Api
  module V1
    class CoinController < ApplicationController
      before_action :authenticate_user

      def create
        coin = Coin.new(coin_params)

        if coin.save
          serialized_coin = CoinSerializer.new(coin).serializable_hash

          render json: serialized_coin.to_json, status: :created
        else
          render json: { errors: coin.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def coin_params
        params.fetch(:coin, {}).permit(:symbol, :name)
      end
    end
  end
end
