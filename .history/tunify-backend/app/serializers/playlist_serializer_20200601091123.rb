class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes 
   has_many :songs 
 end
