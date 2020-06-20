class RemoveTrackRefFromPlaylists < ActiveRecord::Migration[6.0]
  def change
#    remove_reference :playlists, :track_id, null: false, foreign_key: true
    remove_foreign_key :playlists, :track_id
  end
end
