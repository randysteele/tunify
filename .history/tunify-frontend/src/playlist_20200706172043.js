class Playlist extends Track {
 
  constructor(track, trackAttributes, playlist) {
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
    return `            
      <div data-id=${this.id}>
      <h4><li>Playlist Name: ${this.name}</h4></li>  
     </div> 
      `;

    }
  }

  function details(){
    let i;
    for(i = 0; i < this.tracks.length; i++) 
    return this.tracks[i].title, this.tracks[i].artist
    details()
    debugger
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
   



  // function drawGrid(){
    // let xCounter = 0
    // let yCounter = 0
    // for(let x = leftRightMargin + panelWidth; x <= leftRightMargin + panelWidth + divSize; x += scale){
      // if (xCounter % 4 === 0){
        // stroke(255, 100)
        // line(x, upDownMargin, x, upDownMargin + divSize)
      // } else{
        // stroke(255, 50)
        // line(x, upDownMargin, x, upDownMargin + divSize)
      // }
      // xCounter++
    // }
  // 
    // for(let y = upDownMargin; y <= upDownMargin + divSize + 1; y += scale){
      // if (yCounter % 4 === 0){
        // stroke(255, 100)
        // line(leftRightMargin + panelWidth, y, leftRightMargin + panelWidth + divSize, y)
      // }else{
        // stroke(255, 50)
        // line(leftRightMargin + panelWidth, y, leftRightMargin + panelWidth + divSize, y)
      // }
      // yCounter++
    // }
  // }