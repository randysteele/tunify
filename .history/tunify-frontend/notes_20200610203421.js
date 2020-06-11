// document.addEventListener('DOMContentLoaded', () => {
//     const BACKEND_URL = 'http://localhost:3000/api/v1/playlists/top_country'
//     const endpoint = 'http://localhost:3000/api/v1/playlists/'


//     const track = document.getElementById('song-container')
  
//     let songs = []
//     console.log(track)
  
//     track.addEventListener('click', (event) => {
//       if (event.target.className === "release") {  
  
//         const config = {
//           method: "DELETE"
//         }
  
//         fetch(`${BACKEND_URL}/${event.target.dataset.playlistId}`, config)
//           .then(response => response.json())
//           .then(data => {
//             event.target.parentElement.remove()
//             console.log(data)
//           })
//       }
//     })
  
//     const getplaylistsAndRenderAndAddEventListenersAndEtc = () => {
//       track.innerHTML = ''
  
//       fetch(endpoint)
//         .then(response => response.json())
//         .then(data => {
       
  
//           data.forEach(playlist => {
            
//             const playlistCard = document.createElement('div')
//             playlistCard.dataset.id = playlist.id
//             playlistCard.className = "card"
  
//             playlistCard.innerHTML = `
//               <p>${playlist.attributes.name}</p>
//               <button data-playlist-id="${playlist.id}">Add Song</button>
//               <ul id=playlist-card-ul-${playlist.id}>
//               </ul>
//             `
  
//             const addTrack = playlistCard.getElementById('button')
//             addTracks.addEventListener('click', (event) => {
           
//               const config = {
//                 method: 'POST',
//                 headers: {
//                   'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                    playlist_id: playlist.id
//                 })
//               }
  
//               fetch(endpoint, config)
//                 .then(response => response.json())
//                 .then(data => {
//                   console.log(data)
  
//                   getplaylistsAndRenderAndAddEventListenersAndEtc
//                 }) 
  
  
//             })
  
  
//   //<div data-id=${playlist.id}>
// //        <h3>Title: ${playlist.attributes.name}</h3>
// //        <input id="add-button.playlist.id" type ="submit" name="submit" value="Add ${playlist.attributes.name} To Playlist">
// //        <h4> Artist: ${playlist.attributes.artist}</h4>     
// //         <img src="${playlist.attributes.image}"</img>  <br>
// //         Click here for a preview!<a href> <br> ${playlist.attributes.preview}</a>                 
// //         <br>             
           
//             playlist.tracks.forEach(songs => {
//               const playlistCardUl = playlistCard.querySelector('ul')
              
//               const trackLi = document.createElement('li')
              
//               const removeButton = document.createElement('button')
  
  
//               removeButton.innerText = 'Remove Song'
  
//               removeButton.className = 'remove'
//               removeButton.dataset.trackId = track.id
//               pokemonLi.innerText = `${playlist.name} (${playlist.species})`
  
            
//               track.append(releaseButton)
  
//               // append each Li to the trainer card ul
//               trainerCardUl.append(pokemonLi)
//             })
  
//             // <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
//             // <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
//             // <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
//             // <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
//             trainerContainer.append(trainerCard)
//           })
//           // <div class="card" data-id="1"><p>Prince</p>
//           //   <button data-trainer-id="1">Add Pokemon</button>
//           //   <ul>
//           //     <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
//           //     <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
//           //     <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
//           //     <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
//           //     <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
//           //   </ul>
//           // </div>
//           // trainers = data
//           // trainers.forEach(renderTrainer)
//         })
//     }
  
//     getTrainersAndRenderAndAddEventListenersAndEtc()
  
  
  
// })