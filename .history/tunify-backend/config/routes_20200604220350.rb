Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do 
    namespace :v1 do 
    resources :playlists 
    resources :song
    end
  end

  RSpotify.authenticate("bceed1a5b4724cdd8fa5e14fa0d33f80", "6bc73828f7ee458abefff0c66f81b20c")
  @accounts.clientid ="bceed1a5b4724cdd8fa5e14fa0d33f80"
  @accounts.client_secret = "6bc73828f7ee458abefff0c66f81b20c"
  @accounts.redirect_uri =   "http://localhost:3001/"
end
