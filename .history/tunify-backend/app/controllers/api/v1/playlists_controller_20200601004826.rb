class Api::V1::PlaylistsController < ApplicationController

    def index 
        playlists = Playlist.all

        render json: PlaylistsSerializer.new(playlists) 
    end
end
