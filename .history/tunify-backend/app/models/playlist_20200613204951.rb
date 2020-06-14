class Playlist < ApplicationRecord
  has_many :tracks
  belongs_to :track
 

end
