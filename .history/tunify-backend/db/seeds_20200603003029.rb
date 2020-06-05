# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Playlist.destroy_all
Song.destroy_all


leastfav = Song.create(title: "I hate this song", playlist_id: karaoke.id)
newsong = Song.create(title: "My newest song")
favsong = Song.create(title: "my fav song", playlist_id: lady.id)
Song.create(title: 'easy come, easy go', playlist_id: karaoke.id)
hey = Song.create(title: "aye", playlist_id: newsong.id)

lady = Playlist.create(name: "Country")
karaoke = Playlist.create(name: "karaoke")





Playlist.create(name: "Pop")



