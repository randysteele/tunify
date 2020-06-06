class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :tracks, :name
   has_many :playlist_tracks
  #  has_many :playlists, through: :playlist_tracks
 end
