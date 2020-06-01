class AddNameToPlaylist < ActiveRecord::Migration[6.0]
  def change
    add_column :playlist, :name, :string
  end
end
