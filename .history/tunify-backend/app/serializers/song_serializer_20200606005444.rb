class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :artists, :image, :duration, :popularity, :preview, :spotify_id
  has_many :playlist_tracks
  # has_many :playlists, through: :playlist_tracks
end
