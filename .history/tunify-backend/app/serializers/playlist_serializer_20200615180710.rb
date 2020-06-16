class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id, :track_id
  # belongs_to :tracks 
  # has_many :tracks, through: :playlist
end
