module Api
  module V1
    class AuthController < ApplicationController
      def login
        user = User.find_by(email: login_params[:email])

        if user.present? && user.authenticate(login_params[:password])
          serialized_user = UserSerializer.new(user).serializable_hash

          render json: {
            **serialized_user,
            token: JwtService.encode({ id: user.id, username: user.username, email: user.email })
          }
        else
          head :unauthorized
        end
      end

      def signup
        user = User.new(signup_params)

        if user.save
          serialized_user = UserSerializer.new(user).serializable_hash

          render json: serialized_user.to_json, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def login_params
        params.fetch(:auth, {}).permit(:email, :password)
      end

      def signup_params
        params.fetch(:auth, {}).permit(:username, :email, :password, :password_confirmation)
      end
    end
  end
end
