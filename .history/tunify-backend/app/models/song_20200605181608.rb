class Song < ApplicationRecord
    belongs_to :playlist 

   def self.new_from_spotify_song(spotify_song)
    Song.new(
      spotify_id: song.id,
      title: spotify_track.name,
      artists: spotify_track.artists[0].name,
      image: spotify_track.album.images[0]["url"],
      preview: spotify_track.preview_url
    )
    end


    # def self.new_from_spotify_track(spotify_track)
    #     Track.new(
    #       spotify_id: spotify_track.id,
    #       name: spotify_track.name,
    #       artists: spotify_track.artists[0].name,
    #       image: spotify_track.album.images[0]["url"],
    #       preview: spotify_track.preview_url
    #     )
    # end


    def self.create_from_spotify_song(spotify_song)
        song = self.new_from_spotify_song(spotify_song)
        song.save
        song
    end

    # def top_country 
    #     c_songs = RSpotify::Playlist.find("3oybL4xdKqkPO0ObreSPDM")
    #     @songs = c_songs.amp do |country|
    #         Song.new_from_spotify_song(country)
    #     end
    # end

end
