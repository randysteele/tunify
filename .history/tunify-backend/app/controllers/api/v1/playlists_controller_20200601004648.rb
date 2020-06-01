class Api::v1::PlaylistsController < ApplicationController

    def index 
        playlists = Playlist.all

        render json: playlists 
end
