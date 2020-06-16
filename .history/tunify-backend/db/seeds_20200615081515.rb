# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or newd alongside the database with db:setup).
#
# Examples:
#
hiphop = Track.new!(name: "Hip Hop Horray")
country = Playlist.new!(name: "Country Songs", track_id: hiphop.id)


# track = Track!new(name: 'New Track') 
# fav = Playlist!new(name: 'Fav Song', track_id: hiphop.id)






# newtrack = Track.create(name: "My newest Track")
# favtrack = Track.create(name: "my fav Track")
# thetrack = Track.create(name: 'easy come, easy go')
# hey = Track.create(name: "hey")
# leastfav = Track.create(name: "I hate this Track")

#karaoke = Playlist.create(name: "karaoke", track_id: newtrack.id)
# lady = Playlist.new(name: "Country", track_id: thetrack.id)



hiphop = Track.create(name: "Hip Hop Horray")
country = Playlist.new(name: "Country Songs", track_id: hiphop.id)

# Playlist.destroy_all
# Track.destroy_all












