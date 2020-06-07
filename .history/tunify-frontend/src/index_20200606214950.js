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
    const playlistMarkup =     `
       <div data-id=${playlist.id}>
        <h3>Title: ${playlist.attributes.name}</h3>
        <h4> Artist: ${playlist.attributes.artist}</h4>     
        <img src="${playlist.attributes.image}"</img>  <br>
        Click here for a preview!<a href> <br> ${playlist.attributes.preview}</a>          
       
        <button data-id=${playlist.id}>Click Here to Add This song To Your Playlist!</button>         
        
        </div> 
        <br><br>`
       

        // const addButton = document.createElement("BUTTON")
        // addButton.id = "addButton";
        // addButton.innerHTML = 'Add This Song To Your Playlist Here!'
        // document.body.appendChild(addButton);
        


        
     
        document.getElementById("playlist-container").innerHTML += playlistMarkup
      })
  })


  
}
  

function createFormHandler(){
  e.preventDefault()
  const nameInput = document.getElementById("Playlist Name").value
  const trackTitle = document.getElementById("Track Title").value
  
}

function postFetch(name, artist, image, preview, spotify_id) {
  console.log(name, artist, image, preview, spotify_id)
  fetch(BACKEND_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(playlist => {
    console.log(playlist);
    const playlistData = playlist.data
    const playlistMarkup = `
    <div data-id=${playlist.id}>
    <h3>Title: ${playlistData.attributes.name}</h3>
    <h4> Artist: ${playlistData.attributes.artist}</h4>     
    <img src="${playlistData.attributes.image}"</img>
    <button data-id=${playlistData.id}>EDIT!</button>  
    </div>
    `
    document.getElementById('playlist-container').innerHTML = playlistMarkup
  })
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

//   <select id="tracks" name="tracks" multiple> 
//   <option value="1">`${playlist.attributes.name}`</option>
 
// </select>