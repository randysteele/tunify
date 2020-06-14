# class SongSerializer
#   include FastJsonapi::ObjectSerializer
#   attributes :id, :name, :artists, :image, :preview
#   has_many :playlist_tracks
#   has_many :playlists, through: :playlist_tracks
# end
