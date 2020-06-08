class AddPlaylistIdToTracks < ActiveRecord::Migration[6.0]
  def change
    add_column :tracks, :playlist_id, :integer
  end
end
