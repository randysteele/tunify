document.addEventListener('DOMContentLoaded', () => {
const BACKEND_URL = 'http://localhost:3000/api/v1/playlists/'
  getPlaylists();  
})


function getPlaylists() {
  fetch(BACKEND_URL)
  .then(response => response.json())
  .then(playlist  => {
      playlist.forEach(playlist => {
    const playlistMarkup =     `    
       <div data-id=${playlist.id}>
       <h3>Name: ${playlist.name}</h3>
       <input id="add-button.playlist.id" type ="submit" name="submit" value="Add ${playlist.aname} To Playlist">
       <h4> Artist: ${playlist.artist}</h4>     
        <img src="${playlist.image}"</img>  <br>
        Click here for a preview!<a href> <br> ${playlist.preview}</a>                 
        <br>             
        </div> 
        <br><br>` 

        document.querySelector('#playlist-container').innerHTML += playlistMarkup
        
        // document.getElementById("playlist-container").innerHTML += playlistMarkup 
        // const addSong = document.getElementById("add-button.playlist.id")
        // addSong.addEventListener("click", (e) => createButtonHandler(e))
        const createPlaylistForm  = document.getElementById("create-playlist-form");
        createPlaylistForm.addEventListener("submit", (e) => createFormHandler(e)        
         );
        })
        })         
      }
      function createFormHandler(e){
        e.preventDefault()
        let nameInput = document.getElementById("input-name").value  
        postFetch(nameInput)
      }
      function createButtonHandler(e){
        e.preventDefault()
        let buttonClick = document.getElementById("add-button.playlist.id").value
        postFetch()
      }
function postFetch(name, artist, image, preview, playlist_id) {
   const bodyData = {name, artist, image, preview, playlist_id}
  fetch(BACKEND_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)  
    })
  .then(response => response.json())
  .then(playlist => {    
    // const playlistData = playlist.data
    const playlistMarkup = `
    <div data-id=${playlist.id}>
    <h3>Title: ${playlist.name}</h3>   
    <button data-id=${playlist.id}>EDIT!</button>  
    </div>
        `    
    // document.getElementById("add-button.playlist.id").innerHTML += playlistMarkup 
    // this is the event listener for create playlist. 
  })
}  
function newTrack(event){
  const playlistId = event.target.dataset.playlistId
  console.log('working?')
  

  
  

 const loadPlaylists = () => {
   fetch(endpoint)
   .then(response => response.json())
   .then(json => {
     json.forEach(playlist => renderPlaylists(playlist))
   })
 }}