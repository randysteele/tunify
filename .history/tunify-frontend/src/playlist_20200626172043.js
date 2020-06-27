class Playlist {
 
  constructor(playlist, playlistAttributes) {  
    
    // var i;  
    //  for (i = 0; i < playlistAttributes.tracks; i++) {
    //   playlistAttributes.tracks[i].artist 
    //   playlistAttributes.tracks[i].title
    // } 

     
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
   
   <button data-id=${this.id}>EDIT!</button>    
   </div> </li>
   `
      ;
 }
 
}  


Playlist.all = [];