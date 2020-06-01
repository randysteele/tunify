document.addEventListener('DOMContentLoaded', () => {
  getPlaylists()
});


const BACKEND_URL = 'http://localhost:3000/api/v1';
fetch(`${BACKEND_URL}/playlists`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));

  console.log("Tunify!")