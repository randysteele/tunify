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
        debugger
        return  `            
         <div data-id=${this.id}>
         <h3><li>Playlist Name: ${this.name}</h3></li>   
         <h4><li>Track Title: ${this.track.name}</h4></li>
         <h4><li>Track Artist: ${this.track.artist}</h4></li>
         <button data-id=${this.id}>EDIT!</button>    
         </div> </li>
         <br></br>`;              
               
       }
    }  
  
Playlist.all = [];