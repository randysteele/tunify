class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :image
   has_many :tracks 

 end
