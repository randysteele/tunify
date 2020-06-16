class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :tracks, :track_id
  #has_many :tracks 
 
end
