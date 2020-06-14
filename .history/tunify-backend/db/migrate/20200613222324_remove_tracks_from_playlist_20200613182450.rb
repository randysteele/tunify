class RemoveTracksFromPlaylist < ActiveRecord::Migration[6.0]
  def change
    remove_column :playlist, :track_id, :string
  end
end
