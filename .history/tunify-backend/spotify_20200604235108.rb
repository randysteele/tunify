# frozen_string_literal: true

require "httparty"
require "bundler"
Bundler.require

require "active_support"
require "active_support/core_ext"
require "spotify-ruby"

require "spotify/version"
require "spotify/accounts"
require "spotify/accounts/session"
require "spotify/sdk"

##
# The declaration for the Spotify namespace.
#
@accounts = Spotify::Accounts.new
@accounts.client_id = "bceed1a5b4724cdd8fa5e14fa0d33f80"
@accounts.client_secret = "6bc73828f7ee458abefff0c66f81b20c"
@accounts.redirect_uri = "http://localhost:8888/"

@accounts.authorize_url # => "https://accounts.spotify.com/authorize?..."


module Spotify
end