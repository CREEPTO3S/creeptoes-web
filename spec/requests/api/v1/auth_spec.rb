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

    it 'returns user and token' do
      post '/api/v1/auth/login', params: {
        auth: {
          email: 'user@gmail.com',
          password: '123456'
        }
      }

      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)).to have_key('data')
      expect(JSON.parse(response.body)).to have_key('token')
    end

    it 'returns error messages' do
      post '/api/v1/auth/login', params: {
        auth: {
          email: 'non-existing-user@gmail.com',
          password: '123456'
        }
      }

      expect(response).to have_http_status(:unauthorized)
      expect(JSON.parse(response.body)['errors']).to include('Invalid login')
    end
  end
end
