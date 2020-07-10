class Playlist extends Track {
 
  constructor(track, trackAttributes) {
     super(track, trackAttributes);       
     this.id = track.id;
     this.name = trackAttributes.name;  
     this.tracks = trackAttributes.tracks;
    // this.tracks should be an array of Track objects
     Playlist.all.push(this);    
}

renderPlaylistCard() {
  let output = this.name + "";

  for(let i=0; i < this.tracks.length; i++){
    output += `
    <div data-id=${this.id}>
      <h4><li>Title: ${this.tracks[i].title}</h4></li> 
      <h4><li>Artist: ${this.tracks[i].artist}</h4></li> 
    </div>`;
  }
  return output;
  }
}



const fruits = [this.name]

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(fruits, 'br'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'kr'))  // ['banana', 'mango', 'orange']


Playlist.all = [];

// Get the app working so that as you display each playlist, you also display the associated tracks beneath
// Remove the tracks-container because each track will be listed under its playlist
// this.tracks for the Playlist class should be an array of Track objects
// study the filter method in JS
