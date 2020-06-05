class API::V1::PlaylistsController < ApplicationController

    def index 
        playlists = Playlist.all
        options = {
            include:  [:songs]
        }

        render json: PlaylistSerializer.new(playlists, options)
    end


    def top_country 
        s_songs = RSpotify::Playlist.find("7bntwjdswpqhrnqr0gssydbd0", "3oybL4xdKqkPO0ObreSPDM")
        @songs = s_songs.map do |s_songs|
            Playlist.new_from_spotify_song(s_songs)
            options = {
            include:  [:playlist]
        }
        render json: PlaylistSerializer.new(songs, options)
        end
    end
end
