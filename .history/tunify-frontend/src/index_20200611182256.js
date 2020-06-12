const BACKEND_URL = 'http://localhost:3000/api/v1/playlists/'
const endpoint =    'http://localhost:3000/api/v1/playlists'


document.addEventListener('DOMContentLoaded', () => {
  getPlaylists();  


  const createPlaylistForm  = document.getElementById("create-playlist-form");
  createPlaylistForm.addEventListener("submit", (e) => createFormHandler(e)        
  );


function getPlaylists() {
  fetch(BACKEND_URL)
  .then(response => response.json())
  .then(playlist  => {
      playlist.data.forEach(playlist => {
    const playlistMarkup =     `    
       <div data-id=${playlist.id}>
       <h3>Name: ${playlist.attributes.name}</h3>
       <input id="add-button.playlist.id" type ="submit" name="submit" value="Add ${playlist.attributes.name} To Playlist">
       <label for="tracks"> Choose A Track:</label>
       <select name="tracks" id="tracks">
       <option value=${playlist.attributes}></option
       <h4> Artist: ${playlist.attributes.artist}</h4>     
        <img src="${playlist.attributes.image}"</img>  <br>
        Click here for a preview!<a href> <br> ${playlist.attributes.preview}</a>                 
        <br>             
        </div> 
        <br><br>` 
        
        document.getElementById("add-button.playlist.id").innerHTML += playlistMarkup 
        const addSong = document.getElementById("add-button.playlist.id")
        addSong.addEventListener("click", (e) => createButtonHandler(e))
        })
        })         
      }
      function createFormHandler(e){
        e.preventDefault()
        let nameInput = document.getElementById("input-name").value  
        postFetch(nameInput)
      }
      function createButtonHandler(e){
        e.preventDefault()
        let buttonClick = document.getElementById("add-button.playlist.id").value
        postFetch()
      }
function postFetch(name, artist, image, preview, playlist_id) {
  const bodyData = {name, artist, image, preview, playlist_id}
  fetch(BACKEND_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)  
    })
  .then(response => response.json())
  .then(playlist => {    
    const playlistData = playlist.data
    const playlistMarkup = `
    <div data-id=${playlist.id}>
    <h3>Title: ${playlist.name}</h3>   
    <button data-id=${playlist.id}>EDIT!</button>  
    </div>
        `    
    document.getElementById("add-button.playlist.id").innerHTML += playlistMarkup 
    // this is the event listener for create playlist. 
  })
}  
function newTrack(event){
  const playlistId = event.target.dataset.playlistId
  console.log('working?')
  

  
  // const playlistData = {
  //   spotify_id: spotify_id
  // }
  }
}
 );

 const loadPlaylists = () => {
   fetch(endpoint)
   .then(response => response.json())
   .then(json => {
     json.forEach(playlist => renderPlaylists(playlist))
   })
 }

 const renderPlaylists = (playlistData) => {
  const div = document.createElement("div")
  const p = document.createElement("p")
  const button = document.createElement("button")
  const ukl = document.createElement("ul")
  div.setAttribute("class", "card")
  div.setAttribute("data-id", playlistData.id)
  p.innerText = playlistData
  button.setAttribute("data-playlist.id", playlistData.id)
  button.innerHTML = "Add Track To Playlist"


  div.appendChild(p)
  div.appendChild(button)
  div.appendChild(ul)

  add-button.playlist.id.appendChild(div)

//   function getSelectedTracks(sel){
//     let opt;
//     for ( let i = 0, len = sel.options.length; i < len; i++ ){
//       opt = sel.options[i]
//       if (opt.selected === true) {
//         break;
//       }
//     }
//     return opt
//   }

//   let opt = getSelectedTracks(sel)

//   console.log( opt.value)
//   console.log( opt.text )
}


document.getElementById('generate').onclick = function() {

  var values = ["track"];

  var select = document.createElement("select");
  select.name = "tracks";
  select.id = "tracks"

  for (const val of values) {
    var option = document.createElement("option");
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select.appendChild(option);
  }

  var label = document.createElement("label");
  label.innerHTML = "Choose your songs: "
  label.htmlFor = "pets";

  document.getElementById("container").appendChild(label).appendChild(select);
}
