Rails.application.routes.draw do
  resources :photos
  resources :tags

  root 'photos#index'
end
