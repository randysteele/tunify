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
       
       <select ${playlist.id}></select>
       <h3>Title: ${playlist.attributes.name}</h3>
       <input id="add-button" type ="submit" name="submit" value="Add ${playlist.attributes.name} To Playlist"> 
       <h4> Artist: ${playlist.attributes.artist}</h4>     
        <img src="${playlist.attributes.image}"</img>  <br>
        Click here for a preview!<a href> <br> ${playlist.attributes.preview}</a>  
        <input id="create-button" type ="submit" name="submit" value="Create Playlist"></input>
        <br>      
        
        </div> 
        <br><br>`
        
        document.getElementById("playlist-container").innerHTML += playlistMarkup
      })
  })


  
}
  



function postFetch(name, artist, image, preview, spotify_id) {
  console.log(name, artist, image, preview, spotify_id)
  fetch(BACKEND_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: name,
      artist: artist,
      image: image,
      preview: preview,
      spotify_id: spotify_id
    })
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




  });

