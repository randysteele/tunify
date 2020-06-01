Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :Api do 
    namespace :V1 do 
    resources :playlist 
    end
  end

  Rails.application.routes.draw do
    get '/test', to: 'application#test'
  end

end
