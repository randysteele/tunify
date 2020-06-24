class Playlist {

  constructor(playlist, playlistAttributes) {     
     this.id = playlist.id
     this.name = playlistAttributes.name
     this.tracks = playlistAttributes.tracks
     this.tracks.artist = playlistAttributes.artist
     this.tracks.title = playlistAttributes.tracks.title  
     Playlist.all.push(this)
     //debugger    
}


    renderPlaylistCard() {
      return  `            
       <div data-id=${this.id}>
       <h3><li>Playlist Name: ${this.name}</h3></li>   
       <h4><li>Track Title: ${this.tracks.title}</h4></li>
       <h4><li>Track Artist: ${this.tracks.artist}</h4></li>
       <button data-id=${this.id}>EDIT!</button>    
       </div> </li>
       `;              
     }
    }  


    
Playlist.all = [];