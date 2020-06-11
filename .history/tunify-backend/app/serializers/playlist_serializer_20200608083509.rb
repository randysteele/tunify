class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :tracks
   has_many :tracks
  
 end
