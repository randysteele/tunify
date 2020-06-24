class Playlist {

  constructor(playlist, playlistAttributes) {  
    var i;
           for (i = 0; i < playlist.attributes.length; i++) {
                 return playlist.attributes.tracks[i].artist 
               }   
     this.id = playlist.id
      this.name = playlistAttributes.name    
    //  this.artist = playlistAttributes.tracks.artist
    this.artist = playlistAttributes.tracks[i].title
    this.title =  playlistAttributes.tracks[i].artist
    // this.title = playlistAttributes.tracks.title  
     
     Playlist.all.push(this);    
 // let playlistTracksTitle =  playlist.attributes.tracks[i].title;
 // let playlistTracksArtist = playlist.attributes.tracks[i].artist; 
      // debugger 
}
   

renderPlaylistCard() {
  let playlistTracksTitle =  playlist.attributes.tracks[i].title;
  let playlistTracksArtist = playlist.attributes.tracks[i].artist;
  return  `            
   <div data-id=${this.id}>
   <h3><li>Playlist Name: ${this.name}</h3></li>   
   <h4><li>Track Title: ${this.title}</h4></li>
   <h4><li>Track Artist: ${this.artist}</h4></li>
   <h4><li>Artist ${playlistTracksArtist}>/h4></li>
   <h4><li>Title ${playlistTracksTitle}>/h4></li>
   <button data-id=${this.id}>EDIT!</button>    
   </div> </li>
   `;
 }
 
}  



Playlist.all = [];