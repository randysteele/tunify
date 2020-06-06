class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :tracks, :name
   has_many :tracks
  
 end
