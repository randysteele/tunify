class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :id
   has_many :tracks
  
end
