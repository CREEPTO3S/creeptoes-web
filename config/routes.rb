Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'auth/login'
      post 'auth/signup'

      get 'coin', to: 'coin#index'
      post 'coin', to: 'coin#create'
    end
  end

  get '/*path', to: 'main#index'

  root 'main#index'
end
