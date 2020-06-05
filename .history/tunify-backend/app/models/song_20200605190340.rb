class Song < ApplicationRecord
    has_many :playlist_tracks
  has_many :playlists, through: :playlist_tracks

    RSpotify::Playlist.find("7bntwjdswpqhrnqr0gssydbd0", "3oybL4xdKqkPO0ObreSPDM").tracks

   def self.new_from_spotify_song(spotify_song)
    Song.new(
        spotify_id: spotify_track.id,
        name: spotify_track.name,        
        artists: spotify_track.artists[0].name,       
        image: spotify_track.album.images[0]["url"],
        preview: spotify_track.preview_url
    )
    end


    def self.create_from_spotify_song(spotify_song)
        song = self.new_from_spotify_song(spotify_song)
        song.save
        song
    end
end
