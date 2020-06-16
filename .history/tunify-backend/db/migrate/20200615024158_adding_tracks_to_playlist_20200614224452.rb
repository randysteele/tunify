class AddingTracksToPlaylist < ActiveRecord::Migration[6.0]
  def change
    add_references :playlists, :track, null: false, foreign_key: true
  end
end
