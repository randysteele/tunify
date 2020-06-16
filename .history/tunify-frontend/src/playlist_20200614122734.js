class Playlist {

    constructor(playlist, playlistAttributes) {
      this.id = playlist_id
      this.name = playlistAttributes.name
      this.artist = playlistAttributes.artist
      Playlist.all.push(this)
   
    }
  
    renderPlaylistCard() {
      return `
        <div data-id=${this.id}>
        <h3>${this.name}</h3>        
          <p>${this.tracks.name}</p>
          <p>${this.tracks.artist}</p>
          <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`;
    }
  
  }
  
  Playlist.all = [];