class TrackSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :artist, :playlist, :playlist_id
  belongs_to :playlist
end
