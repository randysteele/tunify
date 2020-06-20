class TrackSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :artist, :playlists
  belongs_to :playlists
end
