const BACKEND_URL = 'http://localhost:3000/api/v1/playlists'


document.addEventListener('DOMContentLoaded', () => {
  getPlaylists();  


const createPlaylistForm = document.getElementById("create-playlist-form").addEventListener("submit", function(event){
  event.preventDefault()

})


//  createPlaylistForm.addEventListener("submit", (event) => 
//   createFormHandler(event))

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
     
        document.getElementById("create-playlist-container").innerHTML += playlistMarkup
      })
  })
}
  function createFormHandler(event) {    
    event.preventDefault()
    console.log("yo");


  }
  
