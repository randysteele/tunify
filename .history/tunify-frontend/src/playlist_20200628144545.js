class Playlist {
 
  constructor(playlist, playlistAttributes) {    

     let i;
     for (i = 0; i < playlistAttributes.tracks; i++)           
     this.id = playlist.id
     this.name = playlistAttributes.name    
     this.title = playlistAttributes.tracks[i].value
     this.artist = playlistAttributes.tracks[i].artist
     Playlist.all.push(this);  
     // debugger
}

renderPlaylistCard() {
  return   `            
   <div data-id=${this.id}>
   <h3><li>Playlist Name: ${this.name}</h3></li> 
   <h3><li>Title: ${this.title}</h3></li> 
   <h3><li>By: ${this.artist}</h3></li>    
   <button data-id=${this.id}>EDIT!</button>    
   </div> </li>
   ` ;  
 }
}  

Playlist.all = [];