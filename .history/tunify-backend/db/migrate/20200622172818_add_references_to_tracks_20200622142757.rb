class AddReferencesToTracks < ActiveRecord::Migration[6.0]
  def change
    add_index :tracks, :playlist, null: false, foreign_key: true
  end
end
