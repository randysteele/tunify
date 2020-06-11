const BACKEND_URL = 'http://localhost:3000/api/v1/playlists/top_country'
const endpoint = 'http://localhost:3000/api/v1/playlists/'

document.addEventListener('DOMContentLoaded', () => {
  getPlaylists();  

  const playlistContainer = document.getElementById("playlist-container")

  const createPlaylistForm  = document.getElementById("create-playlist-form");
  createPlaylistForm.addEventListener("submit", (e) => createFormHandler(e)        
  );

function getPlaylists(){
  fetch(BACKEND_URL)
  .then(response => response.json())
  .then(list  => {
  list.data.forEach(playlist=> {
    const playlistMarkup =     `    
       <div data-id=${playlist.id}>
       <h3>Title: ${playlist.attributes.name}</h3>
       <input id="add-button.playlist.id" type ="submit" name="submit" value="Add ${playlist.attributes.name} To Playlist">
       <h4> Artist: ${playlist.attributes.artist}</h4>     
        <img src="${playlist.attributes.image}"</img>  <br>
        Click here for a preview!<a href> <br> ${playlist.attributes.preview}</a>                 
        <br>             
        </div> 
        <br><br>` 
        document.getElementById("add-button.playlist.id").innerHTML += playlistMarkup 
        const addSong = document.getElementById("add-button.playlist.id")
        addSong.addEventListener("click", (e) => newTrack(e))
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
  fetch(endpoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)  
    })
  .then(response => response.json())
  .then(playlist => {    
    // const playlistData = playlist.data
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
 const addTrack = playlistContainer.getElementById('button')
 addTrack.addEventListener('click', (event) => {
   const config = {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      playlist_id: playlist_id
   })
 }
})


// function newTrack(event){
//   const playlistId = event.target.dataset.playlistId
//   console.log('working?')
//   // const playlistData = {
//   //   spotify_id: spotify_id
    
//   // }
  
//   }

// function createPlaylistCard(){
//   playlistContainer.innerHTML = ''
//   fetch(BACKEND_URL)
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(playlist => {
//       const playlistCard = document.createElement('div')
//       playlistCard.dataset.id = playlist.id
//       playlistCard.className = 'card'

//       playlistCard.innerHTML = `
//       <p>${playlist.name}</p>
//       <button data-playlist-id="${playlist.id}">Add Track To Playlist</button>
//       <ul id=playlist-card-ul${playlist.id}>
//       </ul>
//       `
//     })
//   })


// }

 






// document.addEventListener('DOMContentLoaded', () => {
//   const BACKEND_URL = 'http://localhost:3000/api/v1/playlists/top_country'
//   const endpoint =    'http://localhost:3000/api/v1/playlists/'


//   const playlistContainer = document.getElementById('song-container')

//   let songs = []
//   console.log(playlistContainer)

//   playlistContainer.addEventListener('click', (event) => {
//     if (event.target.className === "release") {  

//       const config = {
//         method: "DELETE"
//       }

//       fetch(`${endpoint}/${event.target.dataset.playlistId}`, config)
//         .then(response => response.json())
//         .then(data => {
//           event.target.parentElement.remove()
//           console.log(data)
//         })
//     }
//   })

//   const getplaylistsAndRenderAndAddEventListenersAndEtc = () => {
//    playlistContainer.innerHTML = ''

//     fetch(endpoint)
//       .then(response => response.json())
//       .then(data => {
     

//         data.forEach(playlist => {
          
//           var playlistCard = document.createElement('div')
//           playlistCard.dataset.id = playlist.id
//           playlistCard.className = "card"

//           playlistCard.innerHTML = `
//             <p>${playlist.name}</p>
//             <button data-playlist-id="${playlist.id}">Add Song</button>
//             <ul id=playlist-card-ul-${playlist.id}>
//             <img src="${playlist.image}"</img>
//             <h4> Artist: ${playlist.artist}</h4>    
//             </ul>
//           `
          
//           const addTrack = playlistCard.getElementById += ('button')
//           addTrack.addEventListener += ('click', (event) => {
         
//             const config = {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify({
//                  playlist_id: playlist.id
//               })
//             }

//             fetch(BACKEND_URL, config)
//               .then(response => response.json())
//               .then(data => {
//               })
//             })

         
//           data.forEach(playlist=> {
//             const playlistCardUl = playlistCard.querySelector('ul')
            
//             const trackLi = document.createElement('li')
            
//             const removeButton = document.createElement('button')


//             removeButton.innerText = 'Remove Song'

//             removeButton.className = 'remove'
      
//             playlistCardUl.append(trackLi)
//           })

          
//           playlistContainer.append(playlistCard)
//         })
     
//       })
//   }

//   getplaylistsAndRenderAndAddEventListenersAndEtc()



// })