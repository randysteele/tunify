class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :artist, :image, :preview, :track_id
   has_many :tracks, serializer: TrackSerializer
   has_many :playlist_tracks
  #  has_many :songs 
   
 end
