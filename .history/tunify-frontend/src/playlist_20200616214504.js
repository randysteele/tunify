class Playlist {

    constructor(playlist, playlistAttributes) {
      // debugger
      this.id = playlsit.id;
       this.name = playlist.attributes.name;
       this.track = playlist.attributes.track;
       this.artist = playlist.attributes.artist;     
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