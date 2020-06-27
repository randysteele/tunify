class Track {
 
    constructor(track, trackAttributes) {  
        this.id = track.id
        this.artist = trackAttributes.artist
        this.title = trackAttributes.title
        Track.all.push(this);
    }




    renderTrackCard() {
        return  `            
         <div data-id=${this.id}>
         <h4><li>Track Artist: ${this.artist}</h4></li>
         <h4><li>Track Title: ${this.title}</h4></li>   
         <button data-id=${this.id}>EDIT!</button>    
         </div> </li>
         `;
    }

}

Track.all = [];