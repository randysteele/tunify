class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :artist, :image, :preview, :spotify_id
  #  has_many :tracks
   
 end
