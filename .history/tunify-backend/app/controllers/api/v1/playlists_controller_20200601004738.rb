class Api::V1::PlaylistsController < ApplicationController

    def index 
        playlists = Playlist.all

        render json: playlists 
    end
end
