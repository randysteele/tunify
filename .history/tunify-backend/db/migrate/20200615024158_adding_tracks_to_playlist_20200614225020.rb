class AddingTracksToPlaylist < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :playlists, :tracks
   # add_reference :playlists, :track, null: false, foreign_key: true
    
  end
end
