Rails.application.routes.draw do
  scope '/api' do
    get '/posts', to: 'posts#index'
    post '/posts', to: 'posts#index'
    get '/posts/:id', to: 'posts#show'
    get '/posts/:id', to: 'posts#update'
    delete '/posts/:id', to: 'posts#destroy'
  end


end
