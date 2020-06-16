class TrackSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :artist, :playlist
  belongs_to :playlist
end
