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
          list.data.forEach(playlist =>  {
              const playlistMarkup =  `            
            <li>  <div data-id=${playlist.id}>
              <h3>Playlist Name: ${playlist.attributes.name}</h3>   
              <h3>Track Title ${playlist.attributes.track.name}</h3>
              <button data-id=${playlist.id}>EDIT!</button>    
              </div> </li>
              `;              
              document.getElementById("playlist-container").innerHTML += playlistMarkup;
          }
      )}
  )
}
      //    <h3> Artist: ${playlist.attributes.track.artist}</h3>  
     
    function createFormHandler(e) {
      e.preventDefault()
      const nameInput = document.getElementById('input-name').value
      // const artistInput = document.getElementById('artist-name').value     
      // const trackInput = document.getElementById('track').value
      const trackId = parseInt(document.getElementById('tracks').value)
      postFetch(nameInput, trackId)      
    }

    function postFetch(name, track_id){
      // const bodyData = {name, artist, track_id}

    fetch(BACKEND_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({
        name: name,
        // artist: artist,
        track_id: track_id,
        // track: track
      })      
    })    
    .then(response => response.json())
    .then(playlist => {   
     const playlistData = playlist.data
    
      const playlistMarkup = `   
      <div data-id=${playlist.id}>  
      <h3>Playlist Name: ${playlist.name}</h3> 
      <h3> Track: ${playlistData.attributes.track.name}</h3>  
      <button data-id=${playlist.id}>EDIT!</button>
      </div>`;
      
      document.getElementById("playlist-container").innerHTML += playlistMarkup;
    })


  //  const destroyPlaylist =(playlist_id) => {
  //    fetch(`{BACKEND_URL}/${playlist_id}`, {
  //      method: "DELETE"
  //    })
  //    .then(response => response.json())
  //  }
    }
  

    

