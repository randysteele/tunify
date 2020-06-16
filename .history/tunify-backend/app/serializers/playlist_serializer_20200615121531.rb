class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :track, :track_id
  #has_many :tracks 
 
end
