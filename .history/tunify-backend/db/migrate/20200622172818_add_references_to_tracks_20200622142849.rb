class AddReferencesToTracks < ActiveRecord::Migration[6.0]
  def change
    add_index :tracks, :playlist
  end
end
