class Playlist {

    constructor(name, artist, image, preview, playlist_id) {
      this.id = playlist_id
      this.name = name
      this.artist = title
      this.image = image
      this.preview = preview
      // Playlist.all.push(this)
   
    }
  
    renderPlaylistCard() {
      return `
        <div data-id=${this.id}>
          <img src=${this.image} height="200" width="250">
          <h3>${this.name}</h3>
          <p>${this.track.name}</p>
          <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`;
    }
  
  }
  
  Playlist.all = [];