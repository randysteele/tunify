class ChangeTrackNameToTitle < ActiveRecord::Migration[6.0]
  def change
    rename_column :tracks, :name, :title
  end
end
