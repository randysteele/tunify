const BACKEND_URL = 'http://localhost:3000/api/v1/tracks/top_country'


document.addEventListener('DOMContentLoaded', () => {
  getPlaylists();  


  const createPlaylistForm  = document.getElementById("create-playlist-form");

  createPlaylistForm.addEventListener("submit", (e) => {
      e.preventDefault();
      

  });


function getPlaylists(){
  fetch(BACKEND_URL)
  .then(response => response.json())
  .then(list  => {
  list.data.forEach(playlist=> {
    const playlistMarkup = `
       <div data-id=${spotify.id}>
        <checkboxTrack Title: ${playlist.attributes.name}>
        <h4> Track Artist: ${playlist.attributes.artist}</h4>     
        <a href="${playlist.attributes.image}"</a>      
        <h4>${playlist.attributes.preview}</h4>  
       
        <button data-id=${playlist.id}>add</button>

        
        
        
        </div> 
        <br><br>`
        
        


        
     
        document.getElementById("playlist-container").innerHTML += playlistMarkup
      })
  })


  
}
  

function createFormHandler(){
  e.preventDefault()
  debugger
  const nameInput = document.getElementById('Playlist Name').value
  const songTitle = document.getElementById('Song Title').value
  const songInput = document.getElementById()
  const songId = parseInt()
}


// app.get('/login', function(req, res) {
//   var scopes = 'user-read-private user-read-email';
//   res.redirect('https://accounts.spotify.com/authorize' +
//     '?response_type=code' +
//     '&client_id=' + my_client_id +
//     (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
//     '&redirect_uri=' + encodeURIComponent(redirect_uri));
//   });
  


  });