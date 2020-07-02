class Track {
 
    constructor(track, trackAttributes) {  
      //  this.id = track.id
        this.playlist_id = trackAttributes.playlist_id
        // this.name = trackAttributes.playlist.name
        this.artist = trackAttributes.artist
        this.title = trackAttributes.title
        
        Track.all.push(this);
       
    }
  
    renderTrackCard() {
        return  `  
        
         <div data-id=${this.playlist_id}></div>
         <h3><li>Title: ${this.title}</h3></li>      
         <h3><li>Artist: ${this.artist}</h3></li>        
         </div></div> </li>
         `
         ;            
    } 
}

Track.all = [];