class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :songs, :name
 #  has_many :songs
   has_many :playlist_tracks
   has_many :playlists, through: :playlist_tracks
 end
