# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or newd alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.new([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.new(name: 'Luke', movie: movies.first)





newtrack = Track.new(name: "My newest Track", track_id: newtrack.id)
favtrack = Track.new(name: "my fav Track", track_id: favtrack.id)
thetrack = Track.new(name: 'easy come, easy go', track_id: thetrack.id)
hey = Track.new(name: "hey", track_id: hey.id)
leastfav = Track.new(name: "I hate this Track", track_id: leastfav.id)

karaoke = Playlist.new(name: "karaoke", track_id: newtrack.id)
lady = Playlist.new(name: "Country", track_id: favtrack.id)



hiphop = Track.create(name: "Hip Hop Horray", track_id: hiphop.id)
# country = Playlist.create(name: "Country Songs", track_id: newtrack.id)

# Playlist.destroy_all
# Track.destroy_all











