class Playlist {

    constructor(data, playlistAttributes) {
      // debugger
      this.id = data.id;
       this.name = data.name;
       this.track = data.track;
       this.artist = data.artist;     
       Playlist.all.push(this);   
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