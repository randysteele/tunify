# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or newd alongside the database with db:setup).
#
# Examples:
#
# newtrack = Track.create(name: "My newest Track")
# favtrack = Track.create(name: "my fav Track")
# thetrack = Track.create(name: 'easy come, easy go')
# hey = Track.create(name: "hey")
# leastfav = Track.create(name: "I hate this Track")

#karaoke = Playlist.create(name: "karaoke", track_id: newtrack.id)
# lady = Playlist.new(name: "Country", track_id: thetrack.id)

# 

country = Playlist.create!(name: "Country Songs")
pop = Playlist.create!(name: "Pop")
# country = Playlist.new(name: "Country Songs", track_id: hiphop.id)

third = Track.create!(name: "Third Song", artist: "Brady", playlist_id: pop.id)
fourth = Track.create!(name: "Fourth Song", artist: "Kristy", playlist_id: country.id)
hiphop = Track.create!(name: "Hip Hop Horray", playlist_id: pop.id)
first = Track.create!(name: "First Song", artist: "Randy", playlist_id: country.id)
# second = Track.create!(name: "Second Song", artist: "Kristy", playlist_id: hiphop.id)

Playlist.destroy_all
Track.destroy_all



# ActiveRecord::Schema.define(version: 2020_06_20_171457) do

#     # These are extensions that must be enabled in order to support this database
#     enable_extension "plpgsql"
  
#     create_table "playlists", force: :cascade do |t|
#       t.string "name"
#       t.datetime "created_at", precision: 6, null: false
#       t.datetime "updated_at", precision: 6, null: false
#       t.bigint "track_id", null: false
#       t.index ["track_id"], name: "index_playlists_on_track_id"
#     end
  
#     create_table "tracks", force: :cascade do |t|
#       t.string "name"
#       t.string "artist"
#       t.datetime "created_at", precision: 6, null: false
#       t.datetime "updated_at", precision: 6, null: false
#       t.integer "playlist_id"
#     end
  
#     add_foreign_key "playlists", "tracks"
#   end
  








