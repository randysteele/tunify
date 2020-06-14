class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :artist, :image, :preview, :track_id
   has_many :tracks, serializer: TrackSerializer
   
   
 end
