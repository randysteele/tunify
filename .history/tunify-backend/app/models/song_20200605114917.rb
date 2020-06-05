module Spotify
class Song < ApplicationRecord
    belongs_to :playlist 
end
