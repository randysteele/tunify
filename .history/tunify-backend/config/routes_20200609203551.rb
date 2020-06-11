Rails.application.routes.draw do  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
        resources :playlists do
          collection do 
          get :top_country
          get :random
        resources :tracks do
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