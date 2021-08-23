Rails.application.routes.draw do
  
  root "notes#index"

  get 'notes', to: "notes#index"
  get 'notes/new', to: "notes#new"
  get 'notes/:id', to: "notes#show"
  get 'notes/:id/edit', to: "notes#edit"

  post 'notes', to: "notes#create"
  put 'notes/:id', to: "notes#update"
  patch 'notes/:id', to: "notes#update"
  
  # delete 'notes/:id', to "notes#destroy"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
