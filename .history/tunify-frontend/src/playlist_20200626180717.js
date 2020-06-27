

class Playlist {
 
  constructor(playlist, playlistAttributes) {  
    
     this.id = playlist.id
     this.name = playlistAttributes.name  
     //debugger  
    //  this.artist = playlistAttributes.tracks[i].artist   
    //  this.title = playlistAttributes.tracks[i].title    
     Playlist.all.push(this);   
     // debugger   
}
   

renderPlaylistCard() {
  return  `            
   <div data-id=${this.id}>
   <h3><li>Playlist Name: ${this.name}</h3></li> 
   <h3>Tracks Info: ${withTracks}</h3>
   <button data-id=${this.id}>EDIT!</button>    
   
   </div> </li>
   `
      ;
      
      
 }
  
}  


Playlist.all = [];