class Track < ApplicationRecord
belongs_to :playlist
#  belongs_to :playlist_tracks
# has_many :playlists, through: :playlist_tracks
accepts_nested_attributes_for :playlist
end
