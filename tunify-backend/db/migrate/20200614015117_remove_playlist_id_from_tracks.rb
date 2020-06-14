class RemovePlaylistIdFromTracks < ActiveRecord::Migration[6.0]
  def change
    remove_column :tracks, :playlist_id, :integer
  end
end
