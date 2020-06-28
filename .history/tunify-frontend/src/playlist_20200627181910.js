class Playlist {
 
  constructor(playlist, playlistAttributes) {    
     this.id = playlist.id
     this.track_id = playlistAttributes.track_id
     this.name = playlistAttributes.name  
     Playlist.all.push(this);  
    //  debugger 
}

renderPlaylistCard() {
  return  `            
   <div data-id=${this.id}>
   <h3><li>Playlist Name: ${this.name}</h3></li> 
   <button data-id=${this.id}>EDIT!</button>    
   </div> </li>
   `
      ;  
 }
}  

Playlist.all = [];