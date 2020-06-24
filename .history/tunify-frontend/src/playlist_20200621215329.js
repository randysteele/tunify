class Playlist {

  constructor(playlist, playlistAttributes) {     
     this.id = playlist.id
     this.name = playlistAttributes.name
     this.tracks = playlistAttributes.tracks
     this.tracks.artist = playlistAttributes.tracks.artist     
     Playlist.all.push(this)      
}


    renderPlaylistCard() {
      return  `            
       <div data-id=${this.id}>
       <h3><li>Playlist Name: ${this.name}</h3></li>   
       <h4><li>Track Title: ${this.tracks}</h4></li>
       <h4><li>Track Artist: ${this.track}</h4></li>
       <button data-id=${this.id}>EDIT!</button>    
       </div> </li>
       `;              
             
     }
    }  

Playlist.all = [];