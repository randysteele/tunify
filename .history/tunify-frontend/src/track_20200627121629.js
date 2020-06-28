class Track {
 
    constructor(playlist, trackAttributes) {  
        this.id = playlist.id
        this.artist = trackAttributes.artist
        this.title = trackAttributes.title
        Track.all.push(Playlist);
       //  debugger
    }
  
    renderTrackCard() {
        return  `            
         <div data-id=${this.id}>
         <h4><li>Track Artist: ${this.artist}</h4></li>
         <h4><li>Track Title: ${this.title}</h4></li>       
         </div> </li>
         `
         ;            
    }
     
}

Track.all = [];





// function getTracks() {
//     let newTrack = new Track(track, track.attributes)
//       track.attributes.map(tracks => function(track){
//         return track.artist(tracks)
//       }
//       )
                      
//     document.getElementById("playlist-container").innerHTML += newTrack.renderTrackCard();
            
//     }