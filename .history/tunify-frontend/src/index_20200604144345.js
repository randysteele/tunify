const BACKEND_URL = 'http://localhost:3000/api/v1/playlists'


document.addEventListener('DOMContentLoaded', () => {
  getPlaylists();  


// const createPlaylistForm = 
document.getElementById("create-playlist-form").submit();

// createPlaylistForm.addEventListener("submit", (e) => console.log(e))  

})


function getPlaylists(){
  fetch(BACKEND_URL)
  .then(response => response.json())
  .then(list  => {
  list.data.forEach(playlist=> {
      const playlistMarkup = `
       <div data-id=${playlist.id}>
        <h4>${playlist.attributes.name}</h4>
        <h4>${playlist.attributes.songs.title}</h4>
         
        <button data-id=${playlist.id}>edit</button>
        </div> 
        <br><br>`
        // debugger
     
        document.getElementById("playlist-container").innerHTML += playlistMarkup
      })
  })
}
  function createFormHandler(event) {    
    e.preventDefault()
    console.log("yo");


  }
  
// from line 14
//  createPlaylistForm.addEventListener("submit", (event) => 
//   createFormHandler(event))