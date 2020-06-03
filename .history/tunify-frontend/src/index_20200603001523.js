const BACKEND_URL = 'http://localhost:3000/api/v1/playlists'


document.addEventListener('DOMContentLoaded', () => {
  getPlaylists()
  // getTitle()
});

function getPlaylists(){
  fetch(BACKEND_URL)
  .then(response => response.json())
  .then(list  => {
  list.data.forEach(playlist=> {
      const playlistMarkup = `
       <div data-id=${playlist.id}>
        <h4>${playlist.attributes.name}</h4>
         <p>${playlist.attributes.songs.title}</p> 
        <button data-id=${playlist.id}>edit</button>
        </div> 
        <br><br>`
        // list.data.songs.forEach(songTitle => {
        //   const title = `
        //   ${title}
        // `
        debugger
      })
      
     
        document.getElementById("new-playlist-container").innerHTML += playlistMarkup
      })
  })
}


console.log("Tunify")