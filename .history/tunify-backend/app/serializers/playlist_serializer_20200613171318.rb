class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :artist, :image, :preview, :track_id
   belongs_to :track


#   attribute :track do |object|
#     object.track.as_json
# end

 end
