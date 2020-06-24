class Playlist {

  constructor(playlist, playlistAttributes) {     
     this.id = playlist.id
     this.name = playlistAttributes.name    
     this.artist = playlistAttributes.tracks.artist
     this.title = playlistAttributes.tracks.title    
     
     Playlist.all.push(this);     
      // debugger 
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
   var i;
           for (i = 0; i < playlist.attributes.length; i++) {
                 return playlist.attributes.tracks[i].artist 
               }
               let playlistTracksTitle = playlist.attributes.tracks[i].title ;
               let playlistTracksArtist = playlist.attributes.tracks[i].artist ;
 
 }
 
}  



Playlist.all = [];