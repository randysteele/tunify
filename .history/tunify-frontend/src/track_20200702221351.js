class Track {
 
    constructor(track, trackAttributes) {  
        this.id = track.id
        this.playlist_id = trackAttributes.playlist_id
        this.artist = trackAttributes.artist
        this.title = trackAttributes.title
        this.playlist = trackAttributes.playlist
        Track.all.push(this);
        this.playlist.sort();
    }
  
    renderTrackCard() {
        return  `  
         <div data-id=${this.id}>   
         <div data-id=${this.playlist_id}>  
         <h2><li>Playlist: ${this.playlist.name}</h2></li> 
         <h3><li>Title: ${this.title}</h3></li>
         <h3><li>By: ${this.artist}</h3></li>         
         </div></div> </li>
         `;
    } 
}

Track.all = [];