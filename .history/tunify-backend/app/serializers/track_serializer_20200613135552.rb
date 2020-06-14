class TrackSerializer
  include FastJsonapi::ObjectSerializer 
  attributes  :name, :artist, :image, :preview, :playlist_id
  belongs_to :playlist, serializer: PlaylistSerializer
end
