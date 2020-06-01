const BACKEND_URL = 'http://localhost:3000/test';
fetch(`${BACKEND_URL}/`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));