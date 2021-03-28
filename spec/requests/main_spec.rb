require 'rails_helper'

RSpec.describe 'Main', type: :request do
  describe 'GET root' do
    it 'returns http success' do
      get root_path
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /*path' do
    it 'returns http success' do
      get '/test'
      expect(response).to have_http_status(:success)
    end
  end
end
