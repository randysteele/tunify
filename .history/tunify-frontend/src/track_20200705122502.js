class Track {
 
    constructor(track, trackAttributes) {  
     this.id = track.id
     this.playlist_id = trackAttributes.playlist_id
     this.artist = trackAttributes.artist
     this.title = trackAttributes.title
     this.playlist = trackAttributes.playlist
     this.tracks = trackAttributes.tracks
     Track.all.push(this);
     //   debugger
    }
    renderTrackCard() {
 
        return  `  
         <div data-id=${this.id}>   
         <div data-id=${this.playlist_id}>  
         <h2><li>Playlist: ${this.playlist.name}</h2></li> 
         <h3>Track#: ${this.id}. <br> Title: ${this.title}</h3>
         <h3><li>By: ${this.artist}</h3></li>
         <h2><li>Playlist: ${this.tracks}</h2></li> <br><br>     
                  
         </div></div> </li>
         
         `;

    } 
}
Track.all = [];