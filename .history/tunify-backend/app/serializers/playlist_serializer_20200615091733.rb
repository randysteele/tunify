class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id, :track_id, :track 
 # has_many :tracks 
  # has_many :tracks, through: :playlist
end
