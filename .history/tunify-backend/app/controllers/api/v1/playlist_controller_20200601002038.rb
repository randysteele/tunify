class Api::V1::PlaylistController < ApplicationController

    def index 
        @playlists = Playlist.all

        render json: @playlists

    end
end
