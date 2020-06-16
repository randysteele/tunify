class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :track_id, :tracks
  # has_many :tracks 
 
end
