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
#lady = Playlist.new(name: "Country", track_id: thetrack.id)


country = Playlist.create!(name: "Country Songs")
pop = Playlist.create!(name: "Pop")
# country = Playlist.new(name: "Country Songs", track_id: hiphop.id)

third = Track.create!(title: "Third Song", artist: "Brady", playlist_id: pop.id)
fourth = Track.create!(title: "Fourth Song", artist: "Kristy", playlist_id: country.id)
hiphop = Track.create!(title: "Hip Hop Horray", artist: "Randy", playlist_id: pop.id)
first = Track.create!(title: "First Song", artist: "Randy", playlist_id: country.id)
second = Track.create!(name: "Second Song", aexitrtist: "Kristy", playlist_id: pop.id)

# Playlist.destroy_all

# Track.destroy_all



