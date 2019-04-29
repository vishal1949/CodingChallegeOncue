Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :jobs, only: [:create, :show]
    resources :trucks, only: [:create, :index]
  end
end
