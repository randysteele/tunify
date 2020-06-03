class AddPlaylistToSongs < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :playlist, :has_many
  end
end
