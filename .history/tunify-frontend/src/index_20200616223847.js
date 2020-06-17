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
            // debugger
           let newPlaylist = new Playlist(playlist, playlist.attributes)    
          //  render(playlist)
          document.getElementById("playlist-container").innerHTML += newPlaylist;
          }
      )}
  )
}
     
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
  

    


