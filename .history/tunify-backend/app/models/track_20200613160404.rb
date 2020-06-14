class Track < ApplicationRecord
#belongs_to :playlist
 belongs_to :playlist_tracks
# has_many :playlists, through: :playlist_tracks
end
