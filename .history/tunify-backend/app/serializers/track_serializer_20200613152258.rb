class TrackSerializer
  include FastJsonapi::ObjectSerializer 
  attributes  :name, :artist, :playlist_id
  belongs_to :playlist, serializer: PlaylistSerializer
  has_many :playlists, through: :playlist_tracks
  
end
