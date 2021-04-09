require 'rails_helper'

RSpec.describe 'Api::V1::Coins', type: :request do
  describe 'POST /' do
    before do
      Coin.create(symbol: 'SYM', name: 'coin-name')
    end

    it 'response with coin' do
      post '/api/v1/coin', params: {
        coin: {
          symbol: 'U-SYM',
          name: 'unique-coin-name'
        }
      }

      expect(response).to have_http_status(:created)
      expect(JSON.parse(response.body)).to have_key('data')
    end

    it 'response with error messages when sent empty params' do
      post '/api/v1/coin'

      expect(response).to have_http_status(:unprocessable_entity)
      expect(JSON.parse(response.body)['errors']).to include("Symbol can't be blank")
      expect(JSON.parse(response.body)['errors']).to include("Name can't be blank")
    end

    it 'response with error messages when sent non-unique combination of symbol and name params' do
      post '/api/v1/coin', params: {
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
