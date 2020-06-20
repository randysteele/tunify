class AddPlaylistToTracks < ActiveRecord::Migration[6.0]
  def change
    add_reference :track, :playlist_id, null: false, foreign_key: true
  end
end
