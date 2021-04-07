Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'auth/login'
    end
  end

  get '/*path', to: 'main#index'

  root 'main#index'
end
