class ChangeTrackNameToTitle < ActiveRecord::Migration[6.0]
  def change
    ALTER TABLE tracks
    RENAME name TO title;
  end
end
