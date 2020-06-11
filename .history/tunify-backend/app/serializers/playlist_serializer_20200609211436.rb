class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name
   has_many :track
   
 end
