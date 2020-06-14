class RemoveTracksFromPlaylist < ActiveRecord::Migration[6.0]
  def change
    remove_column :playlist, :tracks, :string
  end
end
