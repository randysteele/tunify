class RemoveAttributesFromTracks < ActiveRecord::Migration[6.0]
  def change
    remove_column :tracks, :image,, :string
    remove_column :tracks, :preview,, :string
    remove_column :tracks, :track_id, :string
  end
end
