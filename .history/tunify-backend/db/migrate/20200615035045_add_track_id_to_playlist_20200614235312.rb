class AddTrackIdToPlaylist < ActiveRecord::Migration[6.0]
  def change
    add_column :playlists, :track_id, :integer
    add_reference :playlists, :track, null: false, foreign_key: true
  end
end
