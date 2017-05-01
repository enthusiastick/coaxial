Rails.application.routes.draw do
  root "pages#index"

  get "auth/:provider/callback", to: "sessions#create"
  delete "sign-out", to: "sessions#delete"
  resources :chat, only: [:index]
end
