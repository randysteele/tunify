class UpdatePlaylistId < ActiveRecord::Migration[6.0]
  def change
    change_table :tracks, :index
  end
end
