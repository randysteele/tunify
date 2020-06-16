class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :tracks, :tracks_id
  has_many :tracks
 
end
