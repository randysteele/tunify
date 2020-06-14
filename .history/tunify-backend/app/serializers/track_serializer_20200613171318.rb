class TrackSerializer
  include FastJsonapi::ObjectSerializer 
  attributes  :name, :artist, :playlist_id
  has_many :playlists
  # belongs_to :playlist, serializer: PlaylistSerializer
  # has_many :playlist_tracks
  # has_many :playlists, through: :playlist_track
#   attribute :track do |object|
#     object.track.as_json
# end
end
