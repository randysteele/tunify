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
          list.data.forEach(playlist => {
        const playlistMarkup = `    
          <div data-id=${playlist.id}>
          <h3>Playlist Name: ${playlist.attributes.name}</h3>
          <h4> Artist: ${playlist.attributes.artist}</h4>     
            <img src=${playlist.attributes.image}>  
            Click here for a preview!<a href> <br> ${playlist.preview}</a>                
            </div> 
            <br><br>`                   

        document.getElementById("playlist-container").innerHTML += playlistMarkup
      })
    })  
  }
      
     
    function createFormHandler(e) {
      e.preventDefault()
      const nameInput = document.getElementById('input-name').value
      const artistInput = document.getElementById('artist-name').value
      // const trackImage = document.getElementById("track-image").value
      const trackInput = document.getElementById('track-title').value
      const trackId = parseInt(document.getElementById('tracks').value)  
      postFetch(nameInput, artistInput, trackImage, trackInput, trackId)
    }

    function postFetch(name, artist, image, preview){
      const bodyData = {name, artist, image, preview}

    fetch(BACKEND_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)      
    })    
    .then(response => response.json())
    .then(playlist => {
      const playlistData = playlist.data.attributes
      const playlistMarkup = `
      <div data-id=${playlist.data.attributes.name}>
      <h4>${playlist.data.attributes.artist}>
      <h4>${playlist.data.attributes.image}>
      <h4>${playlist.data.attributes.preview}>
      
     
      <a href> <br> ${playlist.preview}</a>
      </div>`
      debugger
      document.getElementById("playlist-container").innerHTML += playlistMarkup
    })
    
  }   
   
        // const addSong = document.getElementById("add-button.playlist.id")
        // addSong.addEventListener("click", (e) => createButtonHandler(e))
      //   const createPlaylistForm  = document.getElementById("create-playlist-form");
      //   createPlaylistForm.addEventListener("submit", (e) => createFormHandler(e)        
      //    );
            
      // }
      // function createFormHandler(e){
      //   e.preventDefault()
      //   let nameInput = document.getElementById("input-name").value  
      //   postFetch(nameInput)
      // }
      // function createButtonHandler(e){
      //   e.preventDefault()
      //   let buttonClick = document.getElementById("add-button.playlist.id").value
      //   postFetch()
      // }
// // // function postPlaylist(name, artist, image, preview, playlist_id) {
// // //    let bodyData = {name, artist, image, preview, playlist_id}
// // //   fetch(BACKEND_URL, {
// // //     method: "POST",
// // //     headers: {"Content-Type": "application/json"},
// // //     body: JSON.stringify(bodyData)  
// // //     })
// // //   .then(response => response.json())
// // //   .then(playlist => {    
// // //     const playlistData = playlist.data  `  
// // //     <div data-id=${playlist.id}>
// // //     <h3>Title: ${playlist.name}</h3>   
// // //     <button data-id=${playlist.id}>EDIT!</button>   
// // //     </div>`
           
// //   })
// }



