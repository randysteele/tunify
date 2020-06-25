class Playlist {
 
  constructor(playlist, playlistAttributes) {  
     let i;  
     for (i = 0; i < playlist.attributes.tracks.length; i++) {
       playlistAttributes.tracks[i].artist 
    } 
     this.id = playlist.id
     this.name = playlistAttributes.name    
     this.artist = playlistAttributes.tracks[i].artist 
     this.title = playlistAttributes.tracks[i].title       
     Playlist.all.push(this);     
      // debugger 
}
   

renderPlaylistCard() {
  return  `            
   <div data-id=${this.id}>
   <h3><li>Playlist Name: ${this.name}</h3></li>   
   <h4><li>Track Artist: ${this.artist}</h4></li>
   <h4><li>Track Title: ${this.title}</h4></li>    
   <button data-id=${this.id}>EDIT!</button>    
   </div> </li>
   `
   ;
 }
 
}  
//<h4><li>Track Title: ${this.title}</h4></li>
 //  <h4><li>Track Artist: ${this.artist}</h4></li>


Playlist.all = [];