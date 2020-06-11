class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :artist
   has_many :tracks
   
 end
