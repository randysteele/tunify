class PlaylistSerializer < ActiveModel::Serializers
  # include FastJsonapi::ObjectSerializer
   attributes :name
   has_many :tracks, serializer: PlaylistTracksSerializer

 end
