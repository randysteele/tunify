class Track {
 
    constructor(track, trackAttributes) {  
        this.id = track.id
        this.playlist_id = trackAttributes.playlist_id
        this.artist = trackAttributes.artist
        this.title = trackAttributes.title
        this.playlist = trackAttributes.name
        Track.all.push(this);
       
    }
  
    renderTrackCard() {
        return  `  
         <div data-id=${this.id}>   
         <div data-id=${this.playlist_id}>   
         <h3><li>By: ${this.artist}</h3></li>
         <h3><li>Title: ${this.title}</h3></li>
         <h3><li>playlist: ${this.playlist.name}</h3></li>
         </div></div> </li>
         `
         ;            
    } 
}

Track.all = [];