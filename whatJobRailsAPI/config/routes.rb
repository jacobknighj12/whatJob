Rails.application.routes.draw do
 

  scope '/api' do      
    devise_for :users,
    controllers: {
        sessions: 'users/sessions',
        registrations: 'users/registrations'
    }
    get '/categories', to: 'categories#index'
    get '/posts', to: 'posts#index'
    post '/posts', to: 'posts#create'
    get '/posts/:id', to: 'posts#show'
    put '/posts/:id', to: 'posts#update'
    delete '/posts/:id', to: 'posts#destroy'
    get '/contactmessage', to: 'contactmessages#index'
    post '/contactmessage', to: 'contactmessages#create'
    get '/reportalert', to: 'reportalert#index'
    post '/reportalert', to: 'reportalert#create'
  end
end
