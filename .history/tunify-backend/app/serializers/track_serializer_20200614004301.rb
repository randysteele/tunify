class TrackSerializer < ActiveModel::Serializers
  # include FastJsonapi::ObjectSerializer 
  attributes  :name, :artist, :playlist_id
  belongs_to :playlist
end
