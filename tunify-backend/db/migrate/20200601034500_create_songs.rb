class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|

      t.timestamps
    end
  end
end
