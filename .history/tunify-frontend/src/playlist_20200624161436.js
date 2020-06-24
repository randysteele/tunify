class Playlist {

  constructor(playlist, playlistAttributes, playlistTracksArtist, playlistTracksTitle) {     
     this.id = playlist.id
     this.name = playlistAttributes.name    
     this.artist = playlistTracksArtist
     this.title = playlistTracksTitle   
     
     Playlist.all.push(this);     
      // debugger 
}


renderPlaylistCard() {
  return  `            
   <div data-id=${this.id}>
   <h3><li>Playlist Name: ${this.name}</h3></li>   
   <h4><li>Track Title: ${this.playlistTracksTitle}</h4></li>
   <h4><li>Track Artist: ${this.playlistTracksArtist}</h4></li>
   <button data-id=${this.id}>EDIT!</button>    
   </div> </li>
   `;
 }
 
}  



Playlist.all = [];