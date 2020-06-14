class RemovePlaylistIdFromTracks < ActiveRecord::Migration[6.0]
  def change
    # remove_index :tracks, :playlist_id
    # remove_column :tracks, :playlist_id, :integer
    add_reference :playlist, :tracks, null: false, foreign_key: true
  end
end
