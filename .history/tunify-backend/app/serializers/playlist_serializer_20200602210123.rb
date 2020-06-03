class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :songs, :title 
   has_many :songs 
 end
