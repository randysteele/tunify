class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :track_id, :track
  # has_many :tracks 
 
end
