class AddAttribuesToPlaylsit < ActiveRecord::Migration[6.0]
  def change
    add_column :playlsits, :artist, :string
    add_column :playlsits, :image, :string
    add_column :playlsits, :preview, :string
    add_column :playlsits, :spotify_id, :string
  end
end
