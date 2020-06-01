const BACKEND_URL = 'http://localhost:3000/api/v1/playlists'


document.addEventListener('DOMContentLoaded', () => {
  getPlaylists()
});

function getPlaylists(){
fetch(BACKEND_URL)
.then(response => response.json())
.then(playlist => {
  console.log(playlist)
})

}


// const BACKEND_URL = 'http://localhost:3000/api/v1';
// fetch(`${BACKEND_URL}/playlists`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));

  console.log("Tunify!")