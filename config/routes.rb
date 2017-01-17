Rails.application.routes.draw do
  resources :photos do 
    resources :characters
  end
  resources :tags

  root 'photos#index'
end
