class RemoveTrackRefsFromPlaylists < ActiveRecord::Migration[6.0]
  def change
    remove_index :playlists, :tracks
   # remove_column :playlists, :tracks, :string
  end
end
