class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title,  :image, :preview, :spotify_id
  # belongs_to :playlist
end
