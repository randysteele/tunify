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
       list.data.map(playlist  =>  {      
          let newPlaylist = new Playlist(playlist, playlist.attributes);

      // let playlistTracks =  playlist.attributes.tracks[index].title +=  playlist.attributes.tracks[index].artist 
       
      //  console.log(playlist.attributes.tracks[index].title)
      //  console.log(playlist.attributes.tracks[index].artist)
          
          
       document.getElementById('tracks-container').innerHTML += newPlaylist.renderPlaylistCard();  
         
       //return playlist.attributes.tracks[index].title, playlist.attributes.tracks[index].artist
        
        })
       
        }
  )
}

 
function getTracks() {
  fetch(tracks_URL)
      .then(response => response.json())
      .then(trk  => {
          trk.data.forEach((track, index) =>   { 
                      
          let newTrack = new Track(track, track.attributes);
          //  let withTracks = []
          //  withTracks.push(tracks.playlist_id)
           //withTracks.push(tracks.attributes.artist. tracks.attributes.title )
          
          document.getElementById('tracks-container').innerHTML += newTrack.renderTrackCard();   
        debugger
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
      postTrack(artistValue, titleValue, playlistId) 
    }

    function postFetch(name, playlist_id, title, artist){
    fetch(BACKEND_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({
        name: name,
        playlist_id: playlist_id,
        artist: artist,
        title: title
      })      
    })    
    .then(response => response.json())
    .then(playlist => {          
      const playlistData = playlist.data;      
      let newPlaylist = new Playlist(playlistData, playlistData.attributes);
    
      document.getElementById('tracks-container').innerHTML += newPlaylist.renderPlaylistCard() ;
   
    })  
  }

  function postTrack(playlist_id, artist, title){
    fetch(tracks_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({        
        playlist_id: playlist_id,
        artist: artist,
        title: title
      })      
    })    
    .then(response => response.json())
    .then(track => {          
      const trackData = track.data;      
      let newTrack = new Track(trackData, track.attributes);
      debugger
    
      document.getElementById('tracks-container').innerHTML += newTrack.renderTrackCard() ;   
    })  
  }