require 'rails_helper'

def authenticated_header(user)
  token = Knock::AuthToken.new(payload: { id: user.id }).token

  { Authorization: "Bearer #{token}" }
end

RSpec.describe 'Api::V1::Coins', type: :request do
  let(:user) { User.create(username: 'username', email: 'test@gmail.com', password: '123456', password_confirmation: '123456') }

  describe 'GET /' do
    it 'response with user coins' do
      get api_v1_coin_path, headers: authenticated_header(user)

      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)['data']['id']).to eq(user.id)
    end
  end

  describe 'POST /' do
    it 'response with user coins' do
      post api_v1_coin_path, headers: authenticated_header(user), params: {
        coin: {
          symbol: 'U-SYM',
          name: 'unique-coin-name'
        },
        amount: 500.5
      }

      expect(response).to have_http_status(:created)
      expect(JSON.parse(response.body)['included'][0]['attributes']['coin']['symbol']).to eq('U-SYM')
      expect(JSON.parse(response.body)['included'][0]['attributes']['coin']['name']).to eq('unique-coin-name')
      expect(JSON.parse(response.body)['included'][0]['attributes']['amount']).to eq(500.5)
    end

    it 'response with updated user coins when sent existed combination of symbol, name and user' do
      post api_v1_coin_path, headers: authenticated_header(user), params: {
        coin: {
          symbol: 'SYM',
          name: 'coin-name'
        },
        amount: 500.5
      }

      post api_v1_coin_path, headers: authenticated_header(user), params: {
        coin: {
          symbol: 'SYM',
          name: 'coin-name'
        },
        amount: 100.5
      }

      expect(response).to have_http_status(:created)
      expect(JSON.parse(response.body)['included'][0]['attributes']['coin']['symbol']).to eq('SYM')
      expect(JSON.parse(response.body)['included'][0]['attributes']['coin']['name']).to eq('coin-name')
      expect(JSON.parse(response.body)['included'][0]['attributes']['amount']).to eq(100.5)
    end

    it 'response with error messages when sent empty params' do
      post api_v1_coin_path, headers: authenticated_header(user)

      expect(response).to have_http_status(:unprocessable_entity)
      expect(JSON.parse(response.body)['errors']).to include("Validation failed: Symbol can't be blank, Name can't be blank")
    end
  end

  describe 'DELETE /' do
    it 'response with head no_content' do
      post api_v1_coin_path, headers: authenticated_header(user), params: {
        coin: {
          symbol: 'SYM',
          name: 'coin-name'
        },
        amount: 500.5
      }

      delete api_v1_coin_path, headers: authenticated_header(user), params: {
        coin: {
          symbol: 'SYM',
          name: 'coin-name'
        }
      }

      expect(response).to have_http_status(:no_content)
    end

    it 'response with error messages when sent non-existing combination of coin symbol and name' do
      delete api_v1_coin_path, headers: authenticated_header(user), params: {
        coin: {
          symbol: 'SYM',
          name: 'coin-name'
        }
      }

      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end
