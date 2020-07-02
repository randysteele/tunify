class App {
    attachEventListeners() {
      document.getElementById("list").addEventListener('click', e => {
        const id = parseInt(e.target.dataset.id);
        const playlist = Playlist.findById(id);
        console.log(playlist);
      });
    }
  }