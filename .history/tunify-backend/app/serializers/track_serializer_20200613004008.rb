class TrackSerializer
  include FastJsonapi::ObjectSerializer 
  attributes  :name, :artist, :image, :preview
  belongs_to :playlist
end
