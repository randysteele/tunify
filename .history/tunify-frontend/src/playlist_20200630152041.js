class Playlist {
 
  constructor(playlist, playlistAttributes) {    

     this.id = playlist.id
     this.name = playlistAttributes.name  
     this.track = playlistAttributes.tracks
     Playlist.all.push(this);  
 
}

renderPlaylistCard(playlistAttributes) {
  playlistAttributes.map((playlistAttributes, index) => {


  })

  return   `            
   <div data-id=${this.id}>
   <h3><li>Playlist Name: ${this.name}</h3></li> 
   <p>${this.track[index].title}</p>
   <p>${this.track[index].artist}</p>
   <button data-id=${this.id}>EDIT!</button>    
   </div> </li>
   ` ;  
 }
}  

Playlist.all = [];