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
          <h4>${this.attributes.track.artist}</h4>
          <button data-id=${this.id}>edit</button>
        </div>
        `;
    }  
  }

  function render() {
    console.log(this);
    return  `            
           <div data-id=${playlist.id}>
            <h3><li>Playlist Name: ${playlist.name}</h3></li>   
            <h4><li>Track Title: ${playlist.track.name}</h4></li>
            <h4><li>Track Artist: ${playlist.track.artist}</h4></li>
            <button data-id=${playlist.id}>EDIT!</button>    
            </div> </li>
            `;              
    }
  
  Playlist.all = [];