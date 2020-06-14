class AddAttribuesToPlaylist < ActiveRecord::Migration[6.0]
  def change
    add_column :playlists, :artist, :string
    add_column :playlists, :image, :string
    add_column :playlists, :preview, :string
    add_column :playlists, :spotify_id, :string
  end
end
