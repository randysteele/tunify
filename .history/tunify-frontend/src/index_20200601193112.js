const BACKEND_URL = 'http://localhost:3000/api/v1/playlists'


document.addEventListener('DOMContentLoaded', () => {
  getPlaylists()
});

function getPlaylists(){
fetch(BACKEND_URL)
.then(response => response.json())
.then(playlisting => {
  playlisting.data.forEach(playlisting=> {
  const playlistMarkup = `
  <div data-id=${playlist.id}>
  <h4>${playlisting.attributes.name}</h4
  <h4>${playlisting.attributes.song.title}</h4
  <button data-id=${playlisting.id}<edit</button>
  </div>
  <br><br>`
  document.querySelector(`playlist-container`).innerHTML += playlistMarkup
})
})
}


// const BACKEND_URL = 'http://localhost:3000/api/v1';
// fetch(`${BACKEND_URL}/playlists`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));

  console.log("Tunify!")