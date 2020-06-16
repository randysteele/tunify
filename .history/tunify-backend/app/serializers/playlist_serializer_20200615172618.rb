class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :track, :track_id
  belongs_to :track
 
end
