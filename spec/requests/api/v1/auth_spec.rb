require 'rails_helper'

RSpec.describe 'Api::V1::Auths', type: :request do
  describe 'POST /login' do
    before do
      User.create(
        {
          username: 'user',
          email: 'user@gmail.com',
          password: '123456',
          password_confirmation: '123456'
        }
      )
    end

    it 'response with user and token' do
      post api_v1_auth_login_path, params: {
        auth: {
          email: 'user@gmail.com',
          password: '123456'
        }
      }

      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)).to have_key('data')
      expect(JSON.parse(response.body)).to have_key('token')
    end

    it 'response with error messages when sent empty params' do
      post api_v1_auth_login_path

      expect(response).to have_http_status(:unauthorized)
      expect(JSON.parse(response.body)['errors']).to include('Invalid login')
    end

    it 'response with error messages when sent non existing user' do
      post api_v1_auth_login_path, params: {
        auth: {
          email: 'non-existing-user@gmail.com',
          password: '123456'
        }
      }

      expect(response).to have_http_status(:unauthorized)
      expect(JSON.parse(response.body)['errors']).to include('Invalid login')
    end
  end

  describe 'POST /signup' do
    it 'response with user' do
      post api_v1_auth_signup_path, params: {
        auth: {
          username: 'user',
          email: 'user@gmail.com',
          password: '123456',
          password_confirmation: '123456'
        }
      }

      expect(response).to have_http_status(:created)
      expect(JSON.parse(response.body)).to have_key('data')
    end

    it 'response with error messages when sent empty params' do
      post api_v1_auth_signup_path

      expect(response).to have_http_status(:unprocessable_entity)
      expect(JSON.parse(response.body)['errors']).to include("Password can't be blank")
      expect(JSON.parse(response.body)['errors']).to include("Username can't be blank")
      expect(JSON.parse(response.body)['errors']).to include("Email can't be blank")
      expect(JSON.parse(response.body)['errors']).to include('Email is invalid')
      expect(JSON.parse(response.body)['errors']).to include("Password confirmation can't be blank")
    end

    it 'response with error messages when sent signed up user' do
      User.create(
        {
          username: 'user',
          email: 'user@gmail.com',
          password: '123456',
          password_confirmation: '123456'
        }
      )

      post api_v1_auth_signup_path, params: {
        auth: {
          username: 'user',
          email: 'user@gmail.com',
          password: '123456',
          password_confirmation: '123456'
        }
      }

      expect(response).to have_http_status(:unprocessable_entity)
      expect(JSON.parse(response.body)['errors']).to include('Username has already been taken')
      expect(JSON.parse(response.body)['errors']).to include('Email has already been taken')
    end
  end
end
