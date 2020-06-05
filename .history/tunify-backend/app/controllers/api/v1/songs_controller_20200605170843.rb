class API::V1::SongsController < ApplicationController

    def index 
        songs = Song.all
        options = {
            include:  [:playlist]
        }
        render json: SongSerializer.new(songs, options)
    end

    def top_country 
        c_songs = RSpotify::Playlist.find("3oybL4xdKqkPO0ObreSPDM")
        @songs = c_songs.amp do |country|
            Song.new_from_spotify_song(country)
        end

        render json: SongSerializer.new(songs, options)
    end


    
end
