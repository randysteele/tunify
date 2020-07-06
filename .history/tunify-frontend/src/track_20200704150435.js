class Track {
 
    constructor(track, trackAttributes) {  
     this.id = track.id
     this.playlist_id = trackAttributes.playlist_id
     this.artist = trackAttributes.artist
     this.title = trackAttributes.title
     this.playlist = trackAttributes.playlist
     Track.all.push(this);
     //   debugger
    }

}
Track.all = [];