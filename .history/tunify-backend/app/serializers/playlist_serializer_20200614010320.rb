class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id
end
