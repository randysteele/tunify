class UpdatePlaylistId < ActiveRecord::Migration[6.0]
  # def change
  #   change_table :tracks do |t|
  #     t.change :playlist_id, :index 
  #   end
  # end
  add_reference :playlist, :tracks, null: false, foreign_key: true
end
