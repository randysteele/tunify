    class ApplicationController < ActionController::API
      @accounts = Spotify::Accounts.new
      @accounts.client_id = "spotify client ID"
      @accounts.client_secret = "spotify client secret"
      @accounts.redirect_uri = "redirect URI"
       
      end

