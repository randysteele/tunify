class RemoveTrackIdFromPlaylists < ActiveRecord::Migration[6.0]
  def change
    remove_column :playlists, :track_id, :integer
  end
end
