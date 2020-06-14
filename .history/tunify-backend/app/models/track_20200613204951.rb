class Track < ApplicationRecord
belongs_to :playlist
has_mmany :playlists

end
