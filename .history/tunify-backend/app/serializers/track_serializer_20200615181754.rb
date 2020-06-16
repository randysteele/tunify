class TrackSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :artist, :playlists
  has_many :playlists
end
