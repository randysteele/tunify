class Track {
 
    constructor(track) {  
     this.id = track.id
     this.artist = track.artist
     this.title = track.title
     this.playlist = track.playlist
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
         </div></div> </li>
         `;        

    } 
}


Track.all = [];

// <h2><li>Tracks: ${this.tracks}</h2></li> <br><br>     





