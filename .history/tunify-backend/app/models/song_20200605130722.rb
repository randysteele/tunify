module Spotify
class Song < ApplicationRecord
    belongs_to :playlist 

   def self.new_from_spotify_track 
    Track.new(
      spotify_id: spotify_track.id,
      name: spotify_track.name,
      artists: spotify_track.artists[0].name,
      image: spotify_track.album.images[0]["url"],
      preview: spotify_track.preview_url
    )
    end
end
