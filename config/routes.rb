Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :jobs, only: [:create]
    resources :trucks, only: [:create, :index]
  end
end
