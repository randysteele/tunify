class PlaylistsSerializer < ActiveModel::Serializers
  attributes :id, :name
  has_many :tracks 
end
