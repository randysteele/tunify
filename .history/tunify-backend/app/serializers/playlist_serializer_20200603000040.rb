class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :songs, :name
   has_many :songs
  #  attribute :song_with_title do |s|
  #   "#{s.title} (#{s.title})"
  #  end
 end
