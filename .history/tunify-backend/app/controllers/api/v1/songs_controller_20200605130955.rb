class API::V1::SongsController < ApplicationController

    def index 
        songs = Song.all
        options = {
            include:  [:playlist]
        }

        render json: SongSerializer.new(songs, options)
    end


    def index
        @tracks = Track.all
        render json: @tracks
    end
end
