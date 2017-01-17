Rails.application.routes.draw do
  resources :photos do 
    resources :characters
    resources :tags
  end

  root 'photos#index'
end
