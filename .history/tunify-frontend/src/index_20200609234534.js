const BACKEND_URL = 'http://localhost:3000/api/v1/playlists'
const endpoint =    'http://localhost:3000/api/v1/'

document.addEventListener('DOMContentLoaded', () => {
  getPlaylists();  
  
  
  const createPlaylistForm  = document.getElementById("create-playlist-form");
  createPlaylistForm.addEventListener("submit", (e) => createFormHandler(e)        
  );
  
  

function getPlaylists(){
  fetch(BACKEND_URL)
  .then(response => response.json())
  .then(list  => {
  list.data.forEach(playlist=> {
    const playlistMarkup =     `    
       <div data-id=${playlist.id}>
       <h3>Title: ${playlist.attributes.name}</h3>
       <input id="add-button" type ="SUBMIT" name="SUBMIT" value="Add ${playlist.attributes.name} To Playlist"> 
       <h4> Artist: ${playlist.attributes.artist}</h4>     
        <img src="${playlist.attributes.image}"</img>  <br>
        Click here for a preview!<a href> <br> ${playlist.attributes.preview}</a>                 
        <br>             
        </div> 
        <br><br>` 
        document.getElementById("playlist-container").innerHTML += playlistMarkup 

       
        const addSong = document.getElementById("add-button")
        addSong.addEventListener("click", (e) => newTrack(e))
        })
        
        })         
      }


      function createFormHandler(e){
        e.preventDefault()
        const nameInput = document.getElementById("input-name").value  
        postFetch(nameInput)
         
      }
  
function postFetch(name, artist, image, preview, playlist_id) {
  const bodyData = {name, artist, image, preview, playlist_id}
  fetch(endpoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)  
    })
  .then(response => response.json())
  .then(playlist => {    
    const playlistData = playlist.data
    const playlistMarkup = `
    <div data-id=${playlist.id}>
    <h3>Title: ${playlist.name}</h3>   
    <button data-id=${playlist.id}>EDIT!</button>  
    </div>
        `    
    document.getElementById("playlist-container").innerHTML += playlistMarkup 
    // this is the event listener for create playlist. 
  })
}  

function newTrack(name, artist, image, preview, playlist_id){
  
  // const bodyData = {name, artist, image, preview, playlist_id}
  
  fetch(endpoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(name, artist, image, preview, playlist_id)  
    })
  .then(response => response.json())
  .then(playlist => {    
    const playlistData = playlist.data
    const playlistMarkup = `
    <div data-id=${playlist.id}>
    <h3>Title: ${playlist.name}</h3>   
    <button data-id=${playlist.id}>EDIT!</button>  
    </div>
        `    
  })
  }
}
 );
 
