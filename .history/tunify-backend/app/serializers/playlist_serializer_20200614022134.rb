class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id, :tracks, :name, :artist
  has_many :tracks 
end
