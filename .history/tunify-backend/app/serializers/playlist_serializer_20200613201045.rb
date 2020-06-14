class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :image, :preview
 #  has_many :tracks 

 end
