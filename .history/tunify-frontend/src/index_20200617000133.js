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
                       
           let newPlaylist = new Playlist(playlist, playlist.attributes)    
           let trackMarkup = `<h3> ${playlist.attributes.track.name}</h3>;`
          document.getElementById("playlist-container").innerHTML += trackMarkup += newPlaylist.renderPlaylistCard();
          }
      )}
  )
}
     
    function createFormHandler(e) {
      e.preventDefault()
      const nameInput = document.getElementById('input-name').value
      const artistInput = document.getElementById('artist-name').value     
      const trackId = parseInt(document.getElementById('tracks').value)
      postFetch(nameInput, trackId, artistInput)      
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
    .then(playlist => { 
         
      const playlistData = playlist.data;   
      let trackMarkup = `<h3> ${playlistData.attributes.track.name}</h3>;`
      let newPlaylist = new Playlist(playlistData, playlistData.attributes, trackMarkup);  
     
       
     
      document.getElementById("playlist-container").innerHTML += trackMarkup += newPlaylist.renderPlaylistCard() ;
    })  
  }

