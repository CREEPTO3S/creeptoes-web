require 'rails_helper'

def authenticated_header(user)
  token = Knock::AuthToken.new(payload: { id: user.id }).token

  { Authorization: "Bearer #{token}" }
end

RSpec.describe 'Api::V1::Coins', type: :request do
  let(:user) { User.create(username: 'username', email: 'test@gmail.com', password: '123456', password_confirmation: '123456') }

  describe 'POST /' do
    before do
      Coin.create(symbol: 'SYM', name: 'coin-name')
    end

    it 'response with coin' do
      post api_v1_coin_path, headers: authenticated_header(user), params: {
        coin: {
          symbol: 'U-SYM',
          name: 'unique-coin-name'
        }
      }

      expect(response).to have_http_status(:created)
      expect(JSON.parse(response.body)).to have_key('data')
    end

    it 'response with error messages when sent empty params' do
      post api_v1_coin_path, headers: authenticated_header(user)

      expect(response).to have_http_status(:unprocessable_entity)
      expect(JSON.parse(response.body)['errors']).to include("Symbol can't be blank")
      expect(JSON.parse(response.body)['errors']).to include("Name can't be blank")
    end

    it 'response with error messages when sent non-unique combination of symbol and name params' do
      post api_v1_coin_path, headers: authenticated_header(user), params: {
        coin: {
          symbol: 'SYM',
          name: 'coin-name'
        }
      }

      expect(response).to have_http_status(:unprocessable_entity)
      expect(JSON.parse(response.body)['errors']).to include('Symbol has already been taken')
      expect(JSON.parse(response.body)['errors']).to include('Name has already been taken')
    end
  end
end
