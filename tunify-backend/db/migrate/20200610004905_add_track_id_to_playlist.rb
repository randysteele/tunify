class AddTrackIdToPlaylist < ActiveRecord::Migration[6.0]
  def change
    add_column :playlists, :track_id, :string
  end
end
