class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name
   has_many :songs
   attribute :song_with_title do |s|
    "#{s.title} (#{s.title})"
   end
 end
