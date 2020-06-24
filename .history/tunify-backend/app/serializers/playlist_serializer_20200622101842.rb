class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
   attributes :name, :playlist_id, :tracks
   has_many :tracks
  
end
