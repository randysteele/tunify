class RemoveSongIdFromPlaylist < ActiveRecord::Migration[6.0]
  def change
    drop_reference :playlists, :song, null: false, foreign_key: true
  end
end
