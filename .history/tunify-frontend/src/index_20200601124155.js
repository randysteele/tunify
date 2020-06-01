const BACKEND_URL = 'http://localhost:3000/';
fetch(`${BACKEND_URL}playlist`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));