class RemoveTracksFromTracks < ActiveRecord::Migration[6.0]
  def change
    remove_reference :tracks, :track, null: false, foreign_key: true
  end
end
