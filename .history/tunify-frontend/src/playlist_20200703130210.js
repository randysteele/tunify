class Playlist {
 
  constructor(playlist, playlistAttributes, track) {
     this.id = playlist.id;
     this.name = playlistAttributes.name;  
     this.tracks = track
     // this.tracks should be an array of Track objects
       debugger
     Playlist.all.push(this);
   
}

  renderPlaylistCard() {
      return   `            
      <div data-id=${this.id}>
      <h4><li>Playlist Name: ${this.name}</h4></li>   
      
      </div> </li>
      `;  

      //<h4>Tracks: ${this.tracks}</h4>
  }
}  


Playlist.all = [];

// Get the app working so that as you display each playlist, you also display the associated tracks beneath
// Remove the tracks-container because each track will be listed under its playlist
// this.tracks for the Playlist class should be an array of Track objects
// study the filter method in JS