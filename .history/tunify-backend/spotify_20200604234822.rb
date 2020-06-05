# frozen_string_literal: true

require "httparty"

require "active_support"
require "active_support/core_ext"

require "spotify/version"
require "spotify/accounts"
require "spotify/accounts/session"
require "spotify/sdk"

##
# The declaration for the Spotify namespace.
#


@accounts.authorize_url # => "https://accounts.spotify.com/authorize?..."


module Spotify
end