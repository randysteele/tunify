class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :songs
   has_many :songs 
 end
