class AddingTracksToPlaylist < ActiveRecord::Migration[6.0]
  def change
    t.references :playlists, :tracks, null: false, foreign_key: true
  end
end
