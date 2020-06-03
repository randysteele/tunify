class API::V1::SongsController < ApplicationController

    def index 
        songs = Song.all
        options = {
            include:  [:playlist]
        }

        render json: songserializer.new(songs, options)
    end
end
