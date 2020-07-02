class TrackSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :artist, :playlist_id, :playlist
  belongs_to :playlist
end
