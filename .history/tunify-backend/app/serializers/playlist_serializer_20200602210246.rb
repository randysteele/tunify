class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :songs
   has_many :songs 
   attribute :song_with_title do |song|
    "#{song.title}"
 end
