class Track < ApplicationRecord
# belongs_to :playlist
has_many :playlist_tracks
has_many :playlists, through: :playlist_tracks
end
