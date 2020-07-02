const BACKEND_URL = "http://localhost:3000/api/v1/playlists"
const tracks_URL =  "http://localhost:3000/api/v1/tracks"


document.addEventListener('DOMContentLoaded', () => {
  getPlaylists(); 
  getTracks();

  const createPlaylistForm = document.getElementById("create-playlist-form")
  createPlaylistForm.addEventListener("submit", (e) => createFormHandler(e))  
})


function getPlaylists() {
  fetch(BACKEND_URL)
      .then(response => response.json())
      .then(list  => {
       list.data.map((playlist, index)  =>  {      
          let newPlaylist = new Playlist(playlist, playlist.attributes);       
          
          
       document.getElementById('playlist-container').innerHTML += newPlaylist.renderPlaylistCard();  
        
        })
       
        }
  )
}

 
function getTracks() {
  fetch(tracks_URL)
      .then(response => response.json())
      .then(trk  => {
          trk.data.forEach(track =>   { 
                      
          let newTrack = new Track(track, track.attributes);
          //  let withTracks = []
          //  withTracks.push(tracks.playlist_id)
           //withTracks.push(tracks.attributes.artist. tracks.attributes.title )
          // debugger
          document.getElementById('tracks-container').innerHTML += newTrack.renderTrackCard();   
        
          }
      )}
  )
}
   
    function createFormHandler(e) {
      e.preventDefault()
      const nameInput = parseInt(document.getElementById('input-name').value)
      // const playlistId = document.getElementById('playlists').value
      const titleValue = document.getElementById('title-value').value
      const artistValue = document.getElementById("artist-value").value
      postFetch(nameInput. artistValue, titleValue)   
     // postTrack(artistValue, titleValue) 
    }

    function postFetch(name, artist, title){
    fetch(tracks_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: name
      })      
    })    
    .then(response => response.json())
    .then(playlist => {          
      const playlistData = playlist.data;      
      let newPlaylist = new Playlist(playlistData, playlistData.attributes);
    
      document.getElementById('tracks-container').innerHTML += newPlaylist.renderPlaylistCard() ;
   
    })  
  }

  function postTrack(title, artist){
    fetch(tracks_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        title: title,
        artist: artist
            })      
    })    
    .then(response => response.json())
    .then(track => {          
      const trackData = track.data;  
     //  debugger    
      let newTrack = new Track(trackData, trackData.attributes. trackData.attributes.playlist.name);
    debugger
      document.getElementById('tracks-container').innerHTML += newTrack.renderTrackCard() ;
   
    })  
  }