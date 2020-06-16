class TrackSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :artist, :playlist_id
end
