class Track {
 
    constructor(track, trackAttributes) {  
        this.id = track.id
        this.playlist_id = trackAttributes.playlist_id
        this.artist = trackAttributes.artist
        this.title = trackAttributes.title
        this.playlist = trackAttributes.playlist
        Track.all.push(this);
    }
    renderTrackCard() {
        return  `  
         <div data-id=${this.id}>   
         <div data-id=${this.playlist_id}>  
         <h2><li>Playlist: ${this.playlist.name}</h2></li> 
         <h3>Track: ${this.id}. ${this.title}</h3>
         <h3><li>By: ${this.artist}</h3></li>   
         <iframe src="https://open.spotify.com/embed/track/6urCAbunOQI4bLhmGpX7iS" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
      
         </div></div> </li>
         `;
    } 
}

Track.all = [];