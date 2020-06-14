# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



karaoke = Playlist.create(name: "karaoke")
lady = Playlist.create(name: "Country")

leastfav = Track.create(name: "I hate this Track", playlist_id: karaoke.id)
newtrack = Track.create(name: "My newest Track", playlist_id: karaoke.id)
favtrack = Track.create(name: "my fav Track", playlist_id: lady.id)
Track.create(name: 'easy come, easy go', playlist_id: karaoke.id)
hey = Track.create(name: "aye", playlist_id: newtrack.id)

Playlist.create(name: "Pop")


Playlist.destroy_all
Track.destroy_all












