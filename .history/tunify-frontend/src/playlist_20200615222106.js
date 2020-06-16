class Playlist {

    constructor(playlist, playlistAttributes) {
      this.id = track_id
      this.name = name
      this.artist = artist
      this.track = track      
      Playlist.all.push(this)   
    }
  
    renderPlaylistCard() {
      return `
        <div data-id=${this.id}>
        <h3>${this.name}</h3>        
          <p>${this.track.name}</p>
          <img src=${this.image} height="200" width="250">  
          <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`;
    }
  
  }
  
  Playlist.all = [];