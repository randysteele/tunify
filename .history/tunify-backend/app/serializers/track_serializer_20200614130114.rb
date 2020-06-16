class TrackSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :artist, :playlist_id, :playlist
 # belongs_to :playlist
end
