class API::V1::PlaylistsController < ApplicationController

    def index 
        playlists = Playlist.all
        options = {
            include:  [:songs]
        }

        render json: PlaylistSerializer.new(playlists, options)
    end
end
