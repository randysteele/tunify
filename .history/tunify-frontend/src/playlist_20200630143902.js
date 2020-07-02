class Playlist {
 
  constructor(playlist, playlistAttributes) {    

     this.id = playlist.id
     this.name = playlistAttributes.name  
     this.track = playlistAttributes.tracks
     Playlist.all.push(this);  
 
}

renderPlaylistCard() {

  return   `            
   <div data-id=${this.id}>
   <h3><li>Playlist Name: ${this.name}</h3></li> 
   ${this.track.title.map((t, idx) => <h3 key={idx}>Track: {t.track}</h3>)}
   <p>${this.track[1].artist}</p>
   <button data-id=${this.id}>EDIT!</button>    
   </div> </li>
   ` ;  
 }
}  

Playlist.all = [];