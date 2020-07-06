class Playlist extends Track {
 
  constructor(track, trackAttributes) {
     super(track, trackAttributes); 
    //  this.id = track.id;
    //  this.name = playlistAttributes.name;  
      this.tracks = trackAttributes;
     // this.tracks should be an array of Track objects
     // debugger
     Playlist.all.push(this);
   
}

  renderPlaylistCard() {
      return   `            
      <div data-id=${this.id}>   
      <div data-id=${this.playlist_id}>  
      <h2><li>Playlist: ${this.playlist.name}</h2></li> 
      <h3>Track#: ${this.id}. <br> Title: ${this.title}</h3>
      <h4>Tracks: ${this.tracks}</h4>
      <h3><li>By: ${this.artist}</h3></li><br><br>      
      </div></div> </li>
      `;  

      //<h4>Tracks: ${this.tracks}</h4>
  }
}  


Playlist.all = [];

// Get the app working so that as you display each playlist, you also display the associated tracks beneath
// Remove the tracks-container because each track will be listed under its playlist
// this.tracks for the Playlist class should be an array of Track objects
// study the filter method in JS