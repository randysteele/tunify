class Track {
 
    constructor(track, trackAttributes) {  
        this.id = track.id
        this.artist = trackAttributes.artist
        this.title = trackAttributes.title        
        Track.all.push(this);
       debugger
    }
  
    renderTrackCard() {
        return  `  
         <div data-id=${this.id}> </div>        
         <h3>Title:${this.title}</h3>      
         <h3>Artist:${this.artist}</h3>       
         </div> 
         `
         ;            
    } 
}

Track.all = [];