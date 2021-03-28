Rails.application.routes.draw do
  get '/*path', to: 'main#index'
  root 'main#index'
end
