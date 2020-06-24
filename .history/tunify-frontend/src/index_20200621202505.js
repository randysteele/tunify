const BACKEND_URL = "http://localhost:3000/api/v1/playlists"



document.addEventListener('DOMContentLoaded', () => {
  getPlaylists()  
  selectTracks()
  
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


    function selectTracks(){
      fetch(BACKEND_URL)
      .then(response => response.json())
      .then(playlist  => {
          playlist.data.map(playlist => {                        
            `<h4> ${playlist.attributes.track.name}</h4>
            <h4>${playlist.attributes.track.artist}></h4>  `
            // let newPlaylist = new Playlist(playlist, playlist.attributes) 
            console.log(fetch)
          //  document.getElementById("playlist-container").innerHTML += newPlaylist.renderPlaylistCard();
          //  debugger
          }
      )}
  )
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
      let newPlaylist = new Playlist(playlistData, playlistData.attributes) ;  
     
       
     
      document.getElementById("playlist-container").innerHTML += newPlaylist.renderPlaylistCard() ;
   
    })  
   
  }