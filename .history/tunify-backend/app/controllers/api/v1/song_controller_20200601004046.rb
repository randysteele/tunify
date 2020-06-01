class Api::V1::SongController < ApplicationController

    def index 
        songs = Song.all
        render json: songs

    end
end
