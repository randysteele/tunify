const BACKEND_URL = 'http://localhost:3000/api/v1/playlists'


document.addEventListener('DOMContentLoaded', () => {
  getPlaylists();
  // getTitle();
});

function getPlaylists(){
  fetch(BACKEND_URL)
  .then(response => response.json())
  .then(list  => {
  list.data.forEach(playlist=> {
      const playlistMarkup = `
       <div data-id=${playlist.id}>
        <h4>${playlist.attributes.name}</h4>
        <h4>${playlist.attributes.songs['0..99'].title}</h4>
         
        <button data-id=${playlist.id}>edit</button>
        </div> 
        <br><br>`
        // debugger
     
        document.getElementById("new-playlist-container").innerHTML += playlistMarkup
      })
  })
  function getTitle(){
    fetch(BACKEND_URL)
    .then(response => response.json())
    .then(lists => {
      lists.data.attributes.forEach(play => {
        const withSongTitle = `
        <p>${playlist.attributes.songs.title}</p>`

        document.getElementById("new-playlist-container").innerHTML += withSongTitle
      })
    })
  }
}


console.log("Tunify")