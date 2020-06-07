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
       
    function addTitleToPlaylist(){
    }
      




  
}
  

function createFormHandler(){
  e.preventDefault()
  const nameInput = document.getElementById("Playlist Name").value
  const trackTitle = document.getElementById("Track Title").value
  
}


function postFetch(name, artist, image, preview, spotify_id) {
  console.log(name, artist, image, preview, spotify_id);
  fetch(BACKEND_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
   .then(list  => {
console.log(list);
const playlistData = list.data
const playlistMarkup = `
   <div data-id=${list.id}>
    <h3>Title: ${playlistData.attributes.name}</h3>
    <h4> Artist: ${playlistData.attributes.artist}</h4>     
    <img src="${playlistData.attributes.image}"</img>  <br>
    Click here for a preview!<a href> <br> ${playlistData.attributes.preview}</a>          
   
    <button data-id=${playlistData.id}>Click Here to Add This song To Your Playlist!</button>         
    
    </div> 
    <br><br>`



})
    
 
    document.getElementById("playlist-container").innerHTML += playlistMarkup
};