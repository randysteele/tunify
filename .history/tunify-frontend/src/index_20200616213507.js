const BACKEND_URL = "http://localhost:3000/api/v1/playlists"



document.addEventListener('DOMContentLoaded', () => {
  getPlaylists()  
  
  const createPlaylistForm = document.getElementById("create-playlist-form")
  createPlaylistForm.addEventListener("submit", (e) => createFormHandler(e))
  
})


function getPlaylists() {
  fetch(BACKEND_URL)
      .then(response => response.json())
      .then(list  => {
          list.data.forEach(playlistInfo =>  {
           let newPlaylist = new Playlist(playlistInfo)    
           render(playlist)
           debugger
          }
      )}
  )
}

function render(playlist) {
  const playlistMarkup =  `            
         <div data-id=${playlist.id}>
          <h3><li>Playlist Name: ${playlist.attributes.name}</h3></li>   
          <h4><li>Track Title: ${playlist.attributes.track.name}</h4></li>
          <h4><li>Track Artist: ${playlist.attributes.track.artist}</h4></li>
          <button data-id=${playlist.id}>EDIT!</button>    
          </div> </li>
          `;              
          document.getElementById("playlist-container").innerHTML += playlistMarkup;
  }
      //    <h3> Artist: ${playlist.attributes.track.artist}</h3>  
     
    function createFormHandler(e) {
      e.preventDefault()
      const nameInput = document.getElementById('input-name').value
      // const artistInput = document.getElementById('artist-name').value     
      const trackId = parseInt(document.getElementById('tracks').value)
      postFetch(nameInput, trackId)      
    }

    function postFetch(name, track_id, artist){
    fetch(BACKEND_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({
        name: name,
        artist: artist,
        track_id: track_id,
      })      
    })    
    .then(response => response.json())
    .catch(err => console.log(err))
    .then(playlist => {   
      console.log(playlist);
     const playlistData = playlist.data;
      render(playlistData)      
    })  
    }
  

    


