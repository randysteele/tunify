class TrackSerializer
  include FastJsonapi::ObjectSerializer 
  attributes  :name, :artist, :image, :preview, :spotify_id
 # belongs_to :playlist
end
