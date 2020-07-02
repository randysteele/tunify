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

            // let withTracks = []
            // withTracks.push(playlist.attributes.tracks.playlist_id)
            // withTracks.push(playlist.attributes.tracks[index].artist, playlist.attributes.tracks[index].title )

          
          
       document.getElementById('tracks-container').innerHTML += index += newPlaylist.renderPlaylistCard();  
         
        
        })
       
        }
  )
}

 
function getTracks() {
  fetch(tracks_URL)
      .then(response => response.json())
      .then(trk  => {
          trk.data.map((track, index)=>   { 
                      
           let newTrack = new Track(track, track.attributes);
          //  let withTracks = []
          //  withTracks.push(track.playlist_id)
          //  withTracks.push(track.attributes.artist[index], track.attributes.title[index] )
          
          document.getElementById('tracks-container').innerHTML += track.attributes += newTrack.renderTrackCard();   
        
          }
      )}
  )
}
   
    function createFormHandler(e) {
      e.preventDefault()
     const nameInput = document.getElementById('input-name').value
     const playlistId = parseInt(document.getElementById('title-value').value)
     const titleValue = document.getElementById('title-value').value
     const artistValue = document.getElementById("artist-value").value

      postFetch(nameInput, playlistId)   
      postTrack(artistValue, titleValue) 
    }

    function postFetch(name, playlist_id, tracks){
    fetch(BACKEND_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({
        name: name,
        tracks: tracks,
        playlist_id: playlist_id,
      })      
    })    
    .then(response => response.json())
    .then(playlist => {          
      const playlistData = playlist.data;      
      let newPlaylist = new Playlist(playlistData, playlistData.attributes);
    
      document.getElementById('tracks-container').innerHTML += newPlaylist.renderPlaylistCard() ;
   
    })  
  }

  function postTrack(title, artist, name, playlist_id){
    fetch(tracks_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({
        title: title,
        artist: artist,
        name: name,
        playlist_id: playlist_id
      })      
    })    
    .then(response => response.json())
    .then(track => {          
      const trackData = track.data;      
      let newTrack = new Track(trackData, trackData.attributes);
    debugger
      document.getElementById('tracks-container').innerHTML += newTrack.renderTrackCard() ;
   
    })  


  }