class API::V1::TracksController < ApplicationController
  
  
  def index
        tracks = Track.all      
        render json: TrackSerializer.new(tracks)       
   end


     def show 
      track = Track.find_by(params[:id])
      
      render json: TrackSerializer.new(track)
     end

     def create 
      track = Track.new(track_params)
      render json: TrackSerializer.new(track)
     end
    

    
      
 private
  def track_params
    params.require(:track).permit(:title, :artist, :playlist, :playlist_id)
  end

end
