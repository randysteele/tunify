class AddSongsToPlaylist < ActiveRecord::Migration[6.0]
  def change
    add_reference :playlists, :song, null: false, foreign_key: true
  end
end
