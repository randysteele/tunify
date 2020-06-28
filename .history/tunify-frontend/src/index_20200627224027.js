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
          
           
  
          // console.log( playlist.attributes.tracks[index].title);  // this work fine
          // console.log(playlist.attributes.tracks[index].artist);
       let playlistTracks =  playlist.attributes.tracks[index].title + playlist.attributes.tracks[index].artist
       
       console.log(playlistTracks)
          
          
         document.getElementById('playlist-container').innerHTML += newPlaylist.renderPlaylistCard();  
         return playlistTracks
         //return  playlist.attributes.tracks.artist, playlist.attributes.tracks.title
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
           let withTracks = []
           withTracks.push(tracks.playlist_id)
           //withTracks.push(tracks.attributes.artist. tracks.attributes.title )
          
          document.getElementById('tracks-container').innerHTML += newTrack.renderTrackCard();   
        
          }
      )}
  )
}


     
    function createFormHandler(e) {
      e.preventDefault()
      const nameInput = document.getElementById('input-name').value
      const playlistId = parseInt(document.getElementById('tracks').value)
     // const titleValue = document.getElementById('title-value').value
    //  const artistValue = document.getElementById("artist-value").value
      postFetch(nameInput, playlistId)   
      // postTrack(artistValue, titleValue) 
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
    
      document.getElementById('tracks-container').innerHTML += newPlaylist.renderPlaylistCard() ;
   
    })  
  }
    
    // function postTrack(title, artist){
    //   fetch(tracks_URL, {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json", "Accept": "application/json"},
    //     body: JSON.stringify({
    //       title: title,
    //       artist: artist,
    //     })      
    //   })    
    //   .then(response => response.json())
    //   .then(trk => {          
    //     const trackData = tracks.data;      
    //     let newTrack = new Track(trackData, trackData.attributes);
    //    // let newTrack = new Track(trackData, trackData.attributes)
    //     document.getElementById("playlist-container").innerHTML += newTrack.renderPlaylistCard() ;
     
    //   })  


    // }
  