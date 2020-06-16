class TrackSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :artist, :playlist
 # has_many :playlist
end
