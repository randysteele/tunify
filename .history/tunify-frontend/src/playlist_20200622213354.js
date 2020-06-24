class Playlist {

  constructor(playlist, playlistAttributes) {     
     this.id = playlist.id
     this.name = playlistAttributes.name
    //  this.track = playlistAttributes.track
     this.artist = playlistAttributes.tracks.artist  
     this.title = playlistAttributes.tracks.title
     Playlist.all.push(this);     
   //  debugger 
}


renderPlaylistCard() {
  return  `            
   <div data-id=${this.id}>
   <h3><li>Playlist Name: ${this.name}</h3></li>   
   <h4><li>Track Title: ${this.title}</h4></li>
   <h4><li>Track Artist: ${this.artist}</h4></li>
   <button data-id=${this.id}>EDIT!</button>    
   </div> </li>
   `;              
         
 }
}  

Playlist.all = [];