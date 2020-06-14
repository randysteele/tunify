class DropSong < ActiveRecord::Migration[6.0]
  def change
    drop_table :songs
  end
end
