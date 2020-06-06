class API::V1::TracksController < ApplicationController
    def index
        @tracks = Track.all
    
        options = {
            include:  [:playlist]
        }
        render json: TrackSerializer.new(@tracks)
      end
    
      def top_country
        s_tracks = RSpotify::Playlist.find("7bntwjdswpqhrnqr0gssydbd0", "3oybL4xdKqkPO0ObreSPDM").tracks
        @tracks = s_tracks.map do |s_track|
        Track.new_from_spotify_track(s_track)
        end    
       
        render json: TrackSerializer.new(@tracks)
      end
    
      def random
        s_tracks = RSpotify::Playlist.browse_featured.first.tracks
        @tracks = s_tracks.map do |s_track|
        Track.new_from_spotify_track(s_track)
        end
    
        render json: @tracks
      end
    
      def search
        s_tracks = RSpotify::Track.search(params[:q])
        @tracks = s_tracks.map do |s_track|
          Track.new_from_spotify_track(s_track)
        end
    
        render json: @tracks
      end

def show 
    @track = Track.find_by_id(params[:id])
end

end
