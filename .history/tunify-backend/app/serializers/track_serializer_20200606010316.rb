class TrackSerializer
  include FastJsonapi::ObjectSerializer 
  attributes :id, :name, :artist, :image, :preview, :spotify_id
  # belongs_to :playlist
end
