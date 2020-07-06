class Playlist {
 
  constructor(playlist, playlistAttributes) {
     this.id = playlist.id;
     this.name = playlistAttributes.name;  
     this.tracks = playlistAttributes.tracks
     debugger
     Playlist.all.push(this);
   
}

  renderPlaylistCard() {
      return   `            
      <div data-id=${this.id}>
      <h4><li>Playlist Name: ${this.name}</h4></li>   
      <h4>Tracks: ${this.tracks}</h4>
      </div> </li>
      `;  
  }
}  

Playlist.all = [];