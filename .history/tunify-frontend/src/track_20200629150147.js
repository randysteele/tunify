class Track {
 
    constructor(track, trackAttributes) {  
        this.id = track.id
       // this.playlist_id = trackAttributes.playlist_id
        this.artist = trackAttributes.artist
        this.title = trackAttributes.title
        this.playlist.name = trackAttributes.playlist.name
        Track.all.push(this);
        // debugger
       
    }
  
    renderTrackCard() {
        return  `  
         <div data-id=${this.id}>  
           
         <h3><li>Title: ${this.title}</h3></li>      
         <h3><li>By: ${this.artist}</h3></li>              
         </div></div> </li>
         `
         ;            
    } 
    //  <div data=id=${this.playlist_id}> 
}

Track.all = [];