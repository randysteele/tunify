class API::V1::SongsController < ApplicationController

    def index 
        @songs = Song.all
        options = {
            include:  [:playlist]
        }
        render json: SongSerializer.new(@songs, options)
    end

    def top_country 
        s_songs = RSpotify::Playlist.find("7bntwjdswpqhrnqr0gssydbd0", "3oybL4xdKqkPO0ObreSPDM")
        @songs = c_songs.amp do |s_songs|
            Song.new_from_spotify_song(s_songs)
            options = {
            include:  [:playlist]
        }
        render json: SongSerializer.new(songs, options)
        end


        def random
            s_songs = RSpotify::Playlist.browse_featured.first.tracks
            @songs = s_songs.map do |s_songs|
              Track.new_from_spotify_songs(s_songs)
            end
         render json: @songs
        end
        
    end


    
end
