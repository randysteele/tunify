class API::V1::TracksController < ApplicationController
  
  
  def index
        tracks = Track.all    
        options = {
          include: [:playlist]
        }   
        render json: TrackSerializer.new(options, tracks)       
   end


     def show 
      track = Track.find_by(track_params)
      
      render json: TrackSerializer.new(track)
     end

     def create 
      track = Track.create(track_params)
      render json: TrackSerializer.new(track)
     end
    

    
      
 private
  def track_params
    params.require(:track).permit(:title, :artist, :playlist, :playlist_id)
  end

end
