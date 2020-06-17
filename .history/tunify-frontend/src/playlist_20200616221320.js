class Playlist {

    constructor(playlist, playlistAttributes) {
      // debugger
      this.id = playlist.id;
       this.name = playlist.attributes.name;
       this.track = playlist.attributes.track;
       this.artist = playlist.attributes.artist;     
       Playlist.all.push(this);   
    }
  
    renderPlaylistCard() {
      return `
        <div data-id=${this.id}>
        <h3>${this.name}</h3>        
          <h4>${this.track.name}</h4>
          <img src=${this.image} height="200" width="250">  
          <button data-id=${this.id}>edit</button>
        </div>
        `;
    }  
  }

  function render(playlist) {
    const playlistMarkup =  `            
           <div data-id=${playlist.id}>
            <h3><li>Playlist Name: ${playlist.attributes.name}</h3></li>   
            <h4><li>Track Title: ${playlist.attributes.track.name}</h4></li>
            <h4><li>Track Artist: ${playlist.attributes.track.artist}</h4></li>
            <button data-id=${playlist.id}>EDIT!</button>    
            </div> </li>
            `;              
            document.getElementById("playlist-container").innerHTML += playlistMarkup;
    }
  
  Playlist.all = [];