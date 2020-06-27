const BACKEND_URL = "http://localhost:3000/api/v1/playlists"
const tracks_URL =  "http://localhost:3000/api/v1/tracks"
let Obj = {
  array1: [],
  array2: []
};

let addTracks = [playlist.attributes];
Obj.array1.push(addTracks);
alert(Obj.array1);

document.addEventListener('DOMContentLoaded', () => {
  getPlaylists(); 
  getTracks();

  const createPlaylistForm = document.getElementById("create-playlist-form")
  createPlaylistForm.addEventListener("submit", (e) => createFormHandler(e))
  
})


function getTracks() {
  fetch(tracks_URL)
      .then(response => response.json())
      .then(track  => {
          track.data.forEach(track =>  {                      
           let newTrack = new Track(track, track.attributes)
                    
        
          document.getElementById("playlist-container").innerHTML += newTrack.renderTrackCard();
          
          }
      )}
  )
}

function getPlaylists() {
  fetch(BACKEND_URL)
      .then(response => response.json())
      .then(list  => {
          list.data.forEach(playlist =>  {                      
          let newPlaylist = new Playlist(playlist, playlist.attributes);
      
         //  let newTrack = new Track(track, track.attributes)
          //  var i;
          //  for (i = 0; i < playlist.length; i++) {
          //     return playlist.attributes.tracks[i] 
          //      }
        
              
          document.getElementById("playlist-container").innerHTML += newPlaylist.renderPlaylistCard();   
        
       
          
       //  debugger 
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
     // let newTrack = new Track(trackData, trackData.attributes)
      document.getElementById("playlist-container").innerHTML += newPlaylist.renderPlaylistCard() ;
   
    })  

    
  }