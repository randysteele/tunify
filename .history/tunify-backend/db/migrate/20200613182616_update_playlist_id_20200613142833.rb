class UpdatePlaylistId < ActiveRecord::Migration[6.0]
  def change
    change_table :tracks do |t|
      t.change playlist-id, :index
    end
  end
end
