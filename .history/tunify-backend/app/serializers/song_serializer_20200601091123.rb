class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title 
  belongs_to :playlist
end
