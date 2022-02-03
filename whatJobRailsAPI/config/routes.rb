Rails.application.routes.draw do
  devise_for :users,
             controllers: {
                 sessions: 'users/sessions',
                 registrations: 'users/registrations'
             }
  scope '/api' do
    get '/member-data', to: 'members#show'
    get '/member-data/:id', to: 'members#show'
    post '/member-data', to: 'members#create'
    put '/member-data/:id', to: 'members#update'
    delete '/member-data/:id', to: 'members#delete'
    delete '/clean_up', to: 'clean_up#destroy'
    get '/posts', to: 'posts#index'
    post '/posts', to: 'posts#index'
    get '/posts/:id', to: 'posts#show'
    get '/posts/:id', to: 'posts#update'
    delete '/posts/:id', to: 'posts#destroy'

    post '/contactmessage', to: 'contactmessages#create'

  end


end
