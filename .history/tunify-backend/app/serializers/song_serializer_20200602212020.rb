class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :playlist_id
  # belongs_to :playlist
end
