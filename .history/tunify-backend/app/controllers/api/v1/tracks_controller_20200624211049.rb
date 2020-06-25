class API::V1::TracksController < ApplicationController
  
  
  def index
        tracks = Track.all       
        render json: TrackSerializer.new(tracks)       
      end

    #   def top_50
    #     s_tracks = RSpotify::Playlist.find('spotifycharts', '37i9dQZEVXbLRQDuF5jeBp').tracks
    #     tracks = s_tracks.map do |s_tracks|
    #         Track.new_from_spotify_track(s_track)
    #     end
    #     render json: TrackSerializer.new(tracks)
    # end
 
    

#      def show 
#       track = Track.find_by(params[:id])
      
#       render json: TrackSerializer.new(track)
#      end
    
      
 private
  def track_params
    params.require(:track).permit(:title, :artist, :playlist_id)
  end

end
