class Track {
 
    constructor(track, trackAttributes) {  
        this.id = track.id
       // this.playlist_id = trackAttributes.playlist_id
       // this.name = trackAttributes.playlist.name
        this.artist = trackAttributes.artist
        this.title = trackAttributes.title
        
        Track.all.push(this);
       
    }
  
    renderTrackCard() {
        return  `  
         <div data-id=${this.id}> </div>        
         <h3>Title:${this.title}</h3>      
         <h3>Artist:${this.artist}</h3>       
         </div></div> 
         `
         ;            
    } 
}

Track.all = [];