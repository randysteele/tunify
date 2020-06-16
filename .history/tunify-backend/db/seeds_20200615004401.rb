Movie.destroy_all

Movie.create!([{
  title: "Ant-Man",
  director: "Peyton Reed",
  storyline: "Armed with the astonishing ability to shrink in scale but increase in strength, con-man Scott Lang must embrace his inner-hero and help his mentor, Dr. Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
  watched_on: 5.days.ago
},
{
  title: "Pixels",
  director: "Chris Columbus",
  storyline: "When aliens misinterpret video feeds of classic arcade games as a declaration of war, they attack the Earth in the form of the video games.",
  watched_on: 3.days.ago
},
{
  title: "Terminator Genisys",
  director: "Alan Taylor",
  storyline: "When John Connor, leader of the human resistance, sends Sgt. Kyle Reese back to 1984 to protect Sarah Connor and safeguard the future, an unexpected turn of events creates a fractured timeline. Now, Sgt. Reese finds himself in a new and unfamiliar version of the past, where he is faced with unlikely allies, including the Guardian, dangerous new enemies, and an unexpected new mission: To reset the future...",
  watched_on: 10.days.ago
}])

p "Created #{Movie.count} movies"











