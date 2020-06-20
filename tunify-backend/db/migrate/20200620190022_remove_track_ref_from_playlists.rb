class RemoveTrackRefFromPlaylists < ActiveRecord::Migration[6.0]
  def change
#    remove_reference :playlists, :track_id, null: false, foreign_key: true
    # remove_foreign_key :playlists, :track_id
    # remove_foreign_key :playlists, :tracks

    ALTER TABLE :playlists DROP { CONSTRAINT FOREIGN KEY | PRIMARY KEY | { UNIQUE | FOREIGN KEY } (track_id, [ ... ] ) } [ CASCADE | RESTRICT ]

   
  end
end
