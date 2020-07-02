class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :id, :tracks. :playlist
   has_many :tracks
  
end
