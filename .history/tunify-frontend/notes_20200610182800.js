document.addEventListener('DOMContentLoaded', () => {
    const BACKEND_URL = 'http://localhost:3000/api/v1/playlists/top_country'
    const endpoint = 'http://localhost:3000/api/v1/playlists/'


    const songContainer = document.getElementById('song-container')
  
    let songs = []
    console.log(songContainer)
  
    songContainer.addEventListener('click', (event) => {
      if (event.target.className === "release") {  
  
        const config = {
          method: "DELETE"
        }
  
        fetch(`${BACKEND_URL}/${event.target.dataset.playlistId}`, config)
          .then(response => response.json())
          .then(data => {
            event.target.parentElement.remove()
            console.log(data)
          })
      }
    })
  
    const getTrainersAndRenderAndAddEventListenersAndEtc = () => {
      trainerContainer.innerHTML = ''
  
      fetch(TRAINERS_URL)
        .then(response => response.json())
        .then(data => {
          // console.log(data)
          // maybe we render one trainer
  
          data.forEach(trainer => {
            // console.log(trainer)
            const trainerCard = document.createElement('div')
            trainerCard.dataset.id = trainer.id
            trainerCard.className = "card"
  
            trainerCard.innerHTML = `
              <p>${trainer.name}</p>
              <button data-trainer-id="${trainer.id}">Add Pokemon</button>
              <ul id=trainer-card-ul-${trainer.id}>
              </ul>
            `
  
            const addPokemon = trainerCard.querySelector('button')
            addPokemon.addEventListener('click', (event) => {
              // console.log('CLICKED THE ADD POKEMON BUTTON')
              // check to see the number of pokemons we have
              // be able to fetch to the post pokemon route provided
              // how does this backend work???
              // POST /pokemons
  
              // console.log('trainer id', trainer.id);
              const config = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   trainer_id: trainer.id
                })
              }
  
              fetch(POKEMONS_URL, config)
                .then(response => response.json())
                .then(data => {
                  console.log(data)
  
                  getTrainersAndRenderAndAddEventListenersAndEtc()
                }) // end of the fetch
  
  
            })
  
  
  
            // console.log(trainer.pokemons)
            trainer.pokemons.forEach(pokemon => {
              const trainerCardUl = trainerCard.querySelector('ul')
              // console.log(trainerCardUl)
              const pokemonLi = document.createElement('li')
              // button is inside of this li
              const releaseButton = document.createElement('button')
  
  
              releaseButton.innerText = 'Release'
  
              releaseButton.className = 'release'
              releaseButton.dataset.pokemonId = pokemon.id
              // debugger
              // <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
              pokemonLi.innerText = `${pokemon.nickname} (${pokemon.species})`
  
              // append release button to the Li
              pokemonLi.append(releaseButton)
  
              // append each Li to the trainer card ul
              trainerCardUl.append(pokemonLi)
            })
  
            // <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
            // <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
            // <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
            // <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
            trainerContainer.append(trainerCard)
          })
          // <div class="card" data-id="1"><p>Prince</p>
          //   <button data-trainer-id="1">Add Pokemon</button>
          //   <ul>
          //     <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
          //     <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
          //     <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
          //     <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
          //     <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
          //   </ul>
          // </div>
          // trainers = data
          // trainers.forEach(renderTrainer)
        })
    }
  
    getTrainersAndRenderAndAddEventListenersAndEtc()
  
  
  
})