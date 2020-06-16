class TrackSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :artist
end
