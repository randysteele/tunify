class RemoveAttributesFromPlaylists < ActiveRecord::Migration[6.0]
  def change
    remove_column :playlists, :preview, :string
    remove_column :playlists, :songs, :string
    remove_column :playlists, :artist, :string
  end
end
