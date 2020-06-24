class ChangeTrackNameToTitle < ActiveRecord::Migration[6.0]
  def change
    ALTER TABLE name
    RENAME name TO title;
  end
end
