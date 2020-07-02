class App {

constructor(){
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createPlaylists = this.createPlaylists.bind(this);
    this.addPlaylists = this.addPlaylists.bind(this);
}



    attachEventListeners() {
      document.getElementById("list").addEventListener('click', this.handleEditClick);
      document.getElementById("update").addEventListener('submit', this.handleFormSubmit);
    } 

    createPlaylists(playlists) {
        playlists.forEach(playlist => {
            new Playlist(playlist)
          });
          this.addPlaylists();
    }
    addPlaylists(){
        document.getElementById("list").innerHTML = ' ';
        Playlist.all.forEach(
            playlist => (document.getElementById("list").innerHTML += playlist.renderListItem())
        );
    }

    handleFormSubmit(e){
        e.preventDefault();
        updatePlaylist(playlist.id, bodyJSON).then(updatedPlaylist => {
            const playlist = Playlist.findById(updatePlaylist.id);
            playlist.update(updatedPlaylist);
            this.addPlaylists();
        })
    
      
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
        
        })}

        handleEditClick(e) {
            const id = parseInt(e.target.dataset.id);
            const playlist = Playlist.findById(id);
            document.getElementById("update").innerHTML = playlist.renderUpdateForm();
        }
    }

    

  