class RemoveSpotifyIdFromPlaylists < ActiveRecord::Migration[6.0]
  def change
    remove_column :playlists, :spotify_id, :string
  end
end
