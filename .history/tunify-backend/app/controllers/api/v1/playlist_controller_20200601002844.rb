class API::V1::PlaylistController < ApplicationController

    def index 
        playlists = Playlist.all

        render json: PlaylistSerialilzer.new(playlists)

    end
end
