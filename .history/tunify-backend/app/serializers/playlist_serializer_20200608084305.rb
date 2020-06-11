class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name
   has_many :tracks
   has_many :playlist_tracks
   has_many :tracks, through: :playlist_tracks
 end
