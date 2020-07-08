class Playlist extends Track {
 
  constructor(track, trackAttributes, playlist, playlistAttributes) {
     super(track, trackAttributes);       
     this.id = track.id;
    //  this.playlist.id = playlist_id
      this.name = trackAttributes.name;  
      this.tracks = trackAttributes.tracks;
     // this.tracks should be an array of Track objects
     Playlist.all.push(this);
    
    // debugger
}
  renderPlaylistCard() {
    // let i;
    // for(i = 0; i < this.tracks.length; i++) 
    // this.tracks.title++
   

    return `            
      <div data-id=${this.id}>
      <h4><li>Playlist Name: ${this.name}</h4></li> 
      <h4><li>Title: ${this.tracks[i].title}</h4></li> 
      <h4><li>Artist: ${this.tracks[i].artist}</h4></li>
      <h4><li>Title: ${this.tracks[i++].title}</h4></li> 
      <h4><li>Artist: ${this.tracks[i++].artist}</h4></li>
     </div> 
      `;
    }
  }
  



Playlist.all = [];

// Get the app working so that as you display each playlist, you also display the associated tracks beneath
// Remove the tracks-container because each track will be listed under its playlist
// this.tracks for the Playlist class should be an array of Track objects
// study the filter method in JS











//     // return `${this.name} ${this.tracks[i].title} ${this.tracks[i].artist}`
    
     
        // this.tracks[i].title 
        // while (i < this.tracks.length)
     
        // var i = 0;
        // do {i < this.tracks.length; i;}
        // while (i < this.tracks.length)

  //  var i = 0;
  //  while (i < this.tracks.length){ 
  //      this.tracks[i].title; while (i < this.tracks.length)