class AddingTracksToPlaylist < ActiveRecord::Migration[6.0]
  def change

    add_reference :playlists, :track, null: false, foreign_key: true
    add_foreign_key :playlists, :tracks
  end
end
