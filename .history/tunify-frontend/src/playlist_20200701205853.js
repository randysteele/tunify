class Playlist {
 
  constructor(playlist, playlistAttributes) {    

     this.id = playlist.id
     this.name = playlistAttributes.name  
     Playlist.all.push(this);  
   
}

renderPlaylistCard() {
  return   `            
   <div data-id=${this.id}>
   <h6><li>Playlist Name: ${this.name}</h6></li>   
   </div> </li>
   ` ;  
 }
}  

Playlist.all = [];