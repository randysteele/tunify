class Playlist {
 
  constructor(playlist, playlistAttributes) {    

    //  let i;
    //  for (i = 0; i < playlistAttributes.length; i++)
     this.id = playlist.id
     this.name = playlistAttributes.name  
    // this.tracks = playlistAttributes.tracks
     this.tracks.title = playlistAttributes.tracks[0].title
     this.tracks.artist = playlistAttributes.tracks[0].artist
     Playlist.all.push(this);  
      debugger
}

renderPlaylistCard() {
  return   `            
   <div data-id=${this.id}>
   <h3><li>Playlist Name: ${this.name}</h3></li> 
   <h3><li>Title: ${this.tracks.title}</h3></li> 
   <h3><li>By: ${this.tracks.artist}</h3></li>    
   <button data-id=${this.id}>EDIT!</button>    
   </div> </li>
   ` ;  
 }
}  

Playlist.all = [];