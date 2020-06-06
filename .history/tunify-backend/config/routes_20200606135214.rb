Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users 
        resources :playlists 
        resources :tracks do
        collection do
          get :top_country
          get :random
          get :search          
      end
        # get '/current_user', to: 'auth#create'
        # get '/profile', to: 'users#profile'
        # get '/signup', to: 'auth#create'
        # post '/login', to: 'auth#create'
      # resources :playlist_tracks
      # resources :tracks do
        # collection do
        #   get :top_country
        #   get :random
        #   get :search
        # end
      end
    end
  end
end
end
end
 
