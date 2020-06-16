class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :tracks, :track_id
  belongs_to :tracks
 
end
