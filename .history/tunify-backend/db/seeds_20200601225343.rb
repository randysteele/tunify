# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Playlist.destroy_all
Song.destroy_all

# newsong = Song.create(title: "My newest song", song_id: favsong.id)
# favsong = Song.create(title: "my fav song", song_id: favsong.id)
# leastfav = Song.create(title: "I hate this song", song_id: favsong.id)
Playlist.create(name: "country", song_id: favsong.id)


# lady = Playlist.create(name: "Country")
# karaoke = Playlist.create(name: "Karaoke")
# Song.create(title: 'easy come, easy go', playlist_id: karaoke.id)


