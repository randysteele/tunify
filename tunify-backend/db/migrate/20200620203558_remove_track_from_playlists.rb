class RemoveTrackFromPlaylists < ActiveRecord::Migration[6.0]
  def change
    remove_index :playlists, :track_id
    remove_column :playlists, :track_id, :string
  end
end
