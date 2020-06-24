class AddReferencesToTracks < ActiveRecord::Migration[6.0]
  def change
     change_table :tracks, :playlist, null: false, foreign_key: true
    

  end
end
