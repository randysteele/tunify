class ChangeTrackNameToTitle < ActiveRecord::Migration[6.0]
  def change
    ALTER TABLE track
    RENAME name TO title;
  end
end
