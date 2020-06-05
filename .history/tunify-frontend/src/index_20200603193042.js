const BACKEND_URL = 'http://localhost:3000/api/v1/playlists'


document.addEventListener('DOMContentLoaded', () => {
  getPlaylistSongs();  
});

function getPlaylists(){
  fetch(BACKEND_URL)
  .then(response => response.json())
  .then(list  => {
  list.data.forEach(playlist=> {
      const playlistMarkup = `
       <div data-id=${playlist.id}>
        <h4>${playlist.attributes.name}</h4>
        <h4>${playlist.attributes.title}</h4>
         
        <button data-id=${playlist.id}>edit</button>
        </div> 
        <br><br>`
        // debugger
     
        document.getElementById("new-playlist-container").innerHTML += playlistMarkup
      })
  })


  
}