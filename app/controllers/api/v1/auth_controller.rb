module Api
  module V1
    class AuthController < ApplicationController
      def login
        user = User.find_by(email: auth_params[:email])

        if user.present? && user.authenticate(auth_params[:password])
          serialized_user = UserSerializer.new(user).serializable_hash

          render json: { **serialized_user, token: JwtService.encode(serialized_user) }
        else
          render json: { errors: ['Invalid login'] }, status: :unauthorized
        end
      end

      private

      def auth_params
        params.require(:auth).permit(:email, :password)
      end
    end
  end
end
