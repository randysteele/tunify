class TracksSerializer < ActiveModel::Serializer
  attributes :id :name, :artist
  belongs_to :playlist
end
