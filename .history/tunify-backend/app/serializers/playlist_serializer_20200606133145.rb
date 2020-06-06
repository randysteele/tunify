class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :tracks, :name
   has_many :playlists
   has_many :playlists, through: :playlist_tracks
 end
