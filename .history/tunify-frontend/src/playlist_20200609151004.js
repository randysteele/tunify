class Playlist {

    constructor(playlist) {
      this.id = playlist_id
      this.name = playlistAttributes.name
      this.artist = playlistAttributes.title
      this.image = playlistAttributes.image
      this.preview = playlistAttributes.preview
      Playlist.all.push(this)
   
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