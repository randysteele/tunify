class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id, :track_id, :tracks
  # belongs_to :track
  
end
