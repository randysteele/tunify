class AddPlaylistToTracks < ActiveRecord::Migration[6.0]
  def change
    add_column :tracks, :playlist_id, :string
    add_index :tracks, :playlist_id
  end
end
