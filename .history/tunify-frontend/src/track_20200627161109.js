class Track {
 
    constructor(track, trackAttributes) {  
        this.id = track.id
        this.artist = trackAttributes.artist
        this.title = trackAttributes.title
        Track.all.push(this);
       //  debugger
    }
  
    renderTrackCard() {
        return  `  
         <div data-id=${this.id}>          
         <h3><li>Track Artist: ${this.artist}</h3></li>
         <h3><li>Track Title: ${this.title}</h3></li>       
         </div> </li>
         `
         ;            
    } 
}

Track.all = [];