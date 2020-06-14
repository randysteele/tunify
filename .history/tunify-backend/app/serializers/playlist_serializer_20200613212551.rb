class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :image, :artist, :playlist_id
   has_many :tracks 

 end
