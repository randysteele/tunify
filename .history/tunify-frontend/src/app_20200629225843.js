class App {
    attachEventListeners() {
      document.getElementById("list").addEventListener('click', e => {
        const id = parseInt(e.target.dataset.id);
        const playlist = Playlist.findById(id);
        console.log(playlist);

        document.getElementById("create-edit-form").addEventListener('submit', e => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            const playlist = Playlist.findById(id);
            const name = e.target.getElementById('input').value;

            const bodyJSON = {name};
            fetch(`http://localhost:3000/api/v1/playlists/${playlist.id}`), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',   
                },
                body: JSON.stringify(bodyJSON),
                }
                .then(response => response.json())
                .then(updatedPlaylist => console.log(updatedPlaylist));       
        
        })

      });
    }

  }