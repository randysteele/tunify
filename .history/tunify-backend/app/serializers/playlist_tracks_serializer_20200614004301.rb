class PlaylistTracksSerializer < ActiveModel::Serializers
  # include FastJsonapi::ObjectSerializer
  attributes :name, :artist
  belongs_to :playlist
  has_many :tracks 
end
