class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :artist, :image, :preview, :track_id
   has_many :tracks 


#   attribute :track do |object|
#     object.track.as_json
# end

 end
