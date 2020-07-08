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
          list.data.map(playlist =>  { 
            list.data.map(attributes => {

           
  
          let newPlaylist = new Playlist(playlist, playlist.attributes, attributes);  
           
          document.getElementById("playlist-container").innerHTML += playlist.attributes.tracks += newPlaylist.renderPlaylistCard()  

        })
             
        })
          })       
          }



function getTracks() {
  fetch(tracks_URL)
      .then(response => response.json())
      .then(trk  => {
        trk.data.sort(function(a, b) {
        //  debugger
          var nameA = a.attributes.title; 
          var nameB = b.attributes.title; 
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        
          
          return 0;
        })
        trk.data.map(track =>  {                       
        let newTrack = new Track(track, track.attributes);

        document.getElementById('tracks-container').innerHTML  += newTrack.renderTrackCard(); 
        }
      )}
  )
}


    function createFormHandler(e) {
      e.preventDefault()
      const playlistId = document.getElementById('playlists').value
      const titleValue = document.getElementById('title-value').value
      const artistValue = document.getElementById("artist-value").value
      const tracks = document.getElementById("tracks").values();
      postTrack(artistValue, titleValue, playlistId, tracks) 
    }


  function postTrack(title, artist, playlist_id, tracks){
    fetch(tracks_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: name,
        title: title,
        artist: artist,
        playlist_id: playlist_id,
        tracks: tracks
            })      
    })    
    .then(response => response.json())
    .then(track => {          
      const trackData = track.data;  
      let newTrack = new Track(trackData, trackData.attributes);
      document.getElementById('playlist-container').innerHTML += newTrack.renderTrackCard();   
    })  
 }