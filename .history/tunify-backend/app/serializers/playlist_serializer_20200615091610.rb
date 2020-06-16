class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id, 
 # has_many :tracks 
  # has_many :tracks, through: :playlist
end
end
