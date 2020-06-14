class TrackSerializer
  include FastJsonapi::ObjectSerializer 
  attributes  :name, :artist, :playlist_id
  belongs_to :playlist
  # has_many :playlist_tracks
  # has_many :playlists, through: :playlist_track
  
end
