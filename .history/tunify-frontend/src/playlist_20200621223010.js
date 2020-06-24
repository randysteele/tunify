class Playlist {

  constructor(playlist, playlistAttributes) {     
     this.id = playlist.id
     this.name = playlistAttributes.name
     this.tracks = playlistAttributes.tracks
     this.artist = playlistAttributes.tracks[0].value.artist   
     this.title = playlistAttributes.tracks[0].title  
     Playlist.all.push(this)  
    //  debugger    
}


    renderPlaylistCard() {
      return  `            
       <div data-id=${this.id}>
       <h3><li>Playlist Name: ${this.name}</h3></li>   
       <h4><li>Track Title: ${this.tracks[0].title}</h4></li>
       <h4><li>Track Artist: ${this.tracks[0].artist}</h4></li>
       <button data-id=${this.id}>EDIT!</button>    
       </div> </li>
       `;              
     }
    }  


    
Playlist.all = [];