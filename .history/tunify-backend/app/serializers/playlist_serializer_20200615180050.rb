class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :track_id
  has_many :track
 
end
