class api::V1::PlaylistController < ApplicationController

    def index 
        playlists = Playlist.all

        render json: PlaylistSerializer.new(playlists)

    end
end
