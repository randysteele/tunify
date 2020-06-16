const BACKEND_URL = "http://localhost:3000/api/v1/playlists"



document.addEventListener('DOMContentLoaded', () => {
  getPlaylists()  
  
  const createPlaylistForm = document.getElementById("create-playlist-form")
  createPlaylistForm.addEventListener("submit", (e) => createFormHandler(e))
  
})


    function getPlaylists(index) {
      fetch(BACKEND_URL)  
      .then(response => response.json()) 
      .then(list  => {
          list.data.forEach(playlist =>  {            
            const playlistMarkup =  `
            
          <div data-id=${playlist.id}>
          <h3>Playlist Name: ${playlist.attributes.name}   
          <h3>Track Title ${playlist.attributes.tracks.toString(innerHTML)}
          <h3> Artist: ${playlist.attributes.tracks.artist}
          
                     
            </div> 
            <br><br>`         
           
          
                    // debugger
        document.getElementById("playlist-container").innerHTML += playlistMarkup
            }
      )
      })
  }
      
     
    function createFormHandler(e) {
      e.preventDefault()
      const nameInput = document.getElementById('input-name').value
      const artistInput = document.getElementById('artist-name[0][value]').value      
      // const trackImage = document.getElementById("track-image").value
      const trackInput = document.getElementById('track-title[0][value]').value
      // const trackId = parseInt(document.getElementById('tracks').value)  
      // const relationshipInput = document.getElementById('relationship-input').value
      postFetch(nameInput, artistInput, trackInput)
      
    }

    function postFetch(name, artist,  playlist_id){
      const bodyData = {name, artist,  playlist_id}

    fetch(BACKEND_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)      
    })    
    .then(response => response.json())
    .then(playlist => {
      const playlistData = playlist.data.attributes
      const playlistMarkup = `
      <div data-id=${playlist.id}> 
      <h3>Playlist Name: ${playlistData.name}                    
      <h4>${playlistData.tracks.name}        
      <h4>${playlistData.tracks.artist}          
       
      </div>`
      
      document.getElementById("playlist-container").innerHTML += playlistMarkup
    })
    //<h4> Artist: ${playlist.data.attributes.tracks.artist}  62

//    
    }
  

    


