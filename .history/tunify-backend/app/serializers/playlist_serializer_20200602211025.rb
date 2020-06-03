class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :songs, :name
   has_many :songs 
   attribute :song_with_title do |song|
    "#{song.title}"
   end
 end
