class AddPlaylistToTrack < ActiveRecord::Migration[6.0]
  def change
    add_reference :tracks, :playlist,  foreign_key: true
  end
end
