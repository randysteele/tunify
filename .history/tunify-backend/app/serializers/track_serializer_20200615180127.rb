class TrackSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :artist, :playlist
  jas_many :playlist
end
