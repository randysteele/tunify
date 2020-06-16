class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id, :track_id
  belongs_to :track
  
end
