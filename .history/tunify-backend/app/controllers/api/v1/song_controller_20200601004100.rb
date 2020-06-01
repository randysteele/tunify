class Api::V1::SongController < ApplicationController

    def index 
        songs = Song.all
        render json: SongSerializer.new(songs)

    end
end
