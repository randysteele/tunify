class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :artist, :image, :preview, :track_id
   set_type :playlist
   has_many :tracks, serializer: TrackSerializer
  #  has_many :playlist_tracks
  #  has_many :songs 
   
 end
