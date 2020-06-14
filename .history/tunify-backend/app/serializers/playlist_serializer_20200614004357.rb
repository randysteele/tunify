class PlaylistSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
   attributes :name
   has_many :tracks, serializer: PlaylistTracksSerializer

 end
