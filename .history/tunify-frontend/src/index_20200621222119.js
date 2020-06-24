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
          //  debugger
          }
      )}
  )
}
     
    function createFormHandler(e) {
      e.preventDefault()
      const nameInput = document.getElementById('input-name').value
      // const artistInput = document.getElementById('artist-name').value     
      const playlistId = parseInt(document.getElementById('playlists').value)
      // const titleInput = document.getElementById('title-input').value
      postFetch(nameInput, playlistId)      
    }


    function selectTracks(){
      fetch(BACKEND_URL)
      .then(response => response.json())
      .then(playlist  => {
          playlist.data.map(playlist => {                        
            `<h4> ${playlist.attributes.tracks[0].title}</h4>
            <h4>${playlist.attributes.tracks[0].artist}></h4>  `
            let newPlaylist = new Playlist(playlist, playlist.attributes) 
            console.log(fetch)
           document.getElementById("playlist-container").innerHTML += newPlaylist.renderPlaylistCard();
           //debugger
          }
      )}
  )
    }

    function postFetch(name, title, artist, playlist_id){
    fetch(BACKEND_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({
        name: name,
        title: title,
        artist: artist,
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