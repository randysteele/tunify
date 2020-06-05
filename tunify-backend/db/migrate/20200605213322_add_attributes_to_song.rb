class AddAttributesToSong < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :artist, :string
    add_column :songs, :image, :string
    add_column :songs, :preview, :string
    add_column :songs, :spotify_id, :integer
  end
end
