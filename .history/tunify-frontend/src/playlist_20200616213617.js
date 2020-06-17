class Playlist {

    constructor(data, playlistAttributes) {
      // debugger
      this.id = data.id;
      // this.id = data.id
      // this.name = data.name;
      // this.artist = data.artist;
      // this.track = data.track;     
      // Playlist.all.push(this);   
    }
  
    renderPlaylistCard() {
      return `
        <div data-id=${this.id}>
        <h3>${this.name}</h3>        
          <p>${this.track.name}</p>
          <img src=${this.image} height="200" width="250">  
          <button data-id=${this.id}>edit</button>
        </div>
        `;
    }  
  }
  
  Playlist.all = [];