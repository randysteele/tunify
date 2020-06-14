class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :track_id
  #  has_many :tracks 

 end
