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
           let newPlaylist = new Playlist(playlist, playlist.attributes);
           var i;
           for (i = 0; i < playlist.length; i++) {
              return playlist.attributes.tracks[i] 
               }
          
               
          document.getElementById("playlist-container").innerHTML += newPlaylist.renderPlaylistCard();                       
          document.getElementById('playlist-container').innerHTML += playlist.attributes.tracks[i].title +=newPlaylist.renderPlaylistCard(); 
          
          }
      )}
  )
}

     
    function createFormHandler(e) {
      e.preventDefault()
      const nameInput = document.getElementById('input-name').value
      const playlistId = parseInt(document.getElementById('tracks').value)
      postFetch(nameInput, playlistId)     
    }

    function postFetch(name, playlist_id){
    fetch(BACKEND_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({
        name: name,
        playlist_id: playlist_id,
      })      
    })    
    .then(response => response.json())
    .then(playlist => {          
      const playlistData = playlist.data;      
      let newPlaylist = new Playlist(playlistData, playlistData.attributes);

      document.getElementById("playlist-container").innerHTML += newPlaylist.renderPlaylistCard() ;
   
    })  
  }