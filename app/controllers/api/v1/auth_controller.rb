module Api
  module V1
    class AuthController < ApplicationController
      def login
        user = User.find_by(email: login_params[:email])

        if user.present? && user.authenticate(login_params[:password])
          render json: {
            **serialized_user(user),
            token: JwtService.encode({ id: user.id, username: user.username, email: user.email })
          }
        else
          head :unauthorized
        end
      end

      def signup
        user = User.new(signup_params)

        if user.save
          render json: serialized_user(user).to_json, status: :created
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

      def serialized_user(user)
        UserSerializer.new(user).serializable_hash
      end
    end
  end
end
