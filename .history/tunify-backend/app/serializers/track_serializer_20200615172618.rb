class TrackSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :artist
  has_many :playlists
end
