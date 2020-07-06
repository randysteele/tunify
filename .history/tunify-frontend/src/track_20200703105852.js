class Track {
 
    constructor(track, trackAttributes) {  
        this.id = track.id
        this.playlist_id = trackAttributes.playlist_id
        this.artist = trackAttributes.artist
        this.title = trackAttributes.title
        this.playlist = trackAttributes.playlist
        Track.all.push(this);
    }
    renderTrackCard() {

        return `
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${this.title}</h5>
              <p class="card-text">${this.artist}</p>
              <p class="card-text">${this.playlist.name}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>`
        // return  `  
        //  <div data-id=${this.id}>   
        //  <div data-id=${this.playlist_id}>  
        //  <h2><li>Playlist: ${this.playlist.name}</h2></li> 
        //  <h3>Track#: ${this.id}. <br> Title: ${this.title}</h3>
        //  <h3><li>By: ${this.artist}</h3></li><br><br>   
      
        //  </div></div> </li>
        //  `;
    } 
}

Track.all = [];