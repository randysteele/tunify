class TrackSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :artist
  belongs_to :playlist
end
