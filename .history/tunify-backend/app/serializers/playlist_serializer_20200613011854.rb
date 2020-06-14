class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :artist, :image, :preview
   has_many :tracks
   include module :tracks 
 end
