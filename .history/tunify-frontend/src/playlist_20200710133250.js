class Playlist {
 
  constructor(track, trackAttributes) {
     this.id = track.id;
     this.name = trackAttributes.name;  
     this.tracks = trackAttributes.tracks.map(something => {
       // how would you instantiate a new track here using the Track class?
       return new Track(something)
     })
    // this.tracks should be an array of Track objects
     Playlist.all.push(this);    
}


      
renderPlaylistCard() {
  let output = this.name + "";

  for(let i=0; i < this.tracks.length; i++){
    output += `
    <div data-id=${this.id}>
      <h4>${renderTrackCard()}
      
    </div>`;
  }
  return output;  
  }
  
}

Playlist.all = [];


// Get the app working so that as you display each playlist, you also display the associated tracks beneath
// Remove the tracks-container because each track will be listed under its playlist
// this.tracks for the Playlist class should be an array of Track objects
// study the filter method in JS
