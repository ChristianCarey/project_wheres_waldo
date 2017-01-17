Rails.application.routes.draw do
  resources :photos do 
    resources :characters
    resources :tags
  end

  resources :tags

  root 'photos#index'
end
