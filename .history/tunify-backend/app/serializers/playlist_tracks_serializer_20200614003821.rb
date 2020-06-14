class PlaylistTracksSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  belongs_to :playlist
  has_many :tracks 
end
