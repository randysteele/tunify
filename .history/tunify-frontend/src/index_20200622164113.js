const BACKEND_URL = "http://localhost:3000/api/v1/playlists"



document.addEventListener('DOMContentLoaded', () => {
  getPlaylists()  
  
  
  const createPlaylistForm = document.getElementById("create-playlist-form")
  createPlaylistForm.addEventListener("submit", (e) => createFormHandler(e))
  
})


function getPlaylists() {
  fetch(BACKEND_URL)
      .then(response => response.json())
      .then(playlist  => {
          playlist.data.forEach(playlist =>  {                        
           let newPlaylist = new Playlist(playlist, playlist.attributes)  

          document.getElementById("playlist-container").innerHTML += newPlaylist.renderPlaylistCard();
          //  debugger
          }
      )}
  )
}
     
    function createFormHandler(e) {
      e.preventDefault()
      const nameInput = document.getElementById('input-name').value
      // const artistInput = document.getElementById('artist-input').value     
      const playlistId = parseInt(document.getElementById('tracks').value)
      // const titleInput = document.getElementById('title-input').value
      postFetch(nameInput, playlistId)     
    }
  

    function postFetch(name, tracks, title, artist, playlist_id){
    fetch(BACKEND_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({
        name: name,
   
        playlist_id: playlist_id
      })      
    })    
    .then(response => response.json())
    .then(playlist => {          
      const playlistData = playlist.data;      
      let newPlaylist = new Playlist(playlistData, playlistData.attributes) ;  
     
       
     
      document.getElementById("playlist-container").innerHTML += newPlaylist.renderPlaylistCard() ;
   
    })  
   
  }