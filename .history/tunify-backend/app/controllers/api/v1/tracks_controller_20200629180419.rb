class API::V1::TracksController < ApplicationController
  
  
  def index
        tracks = Track.all      
        render json: TrackSerializer.new(tracks)       
   end


     def show 
      track = Track.find_by(track_params)
      
      render json: TrackSerializer.new(track)
     end

     def create 
      track = Track.new(track_params)
      if track.save
      options = {
          include: [:playlist]
        }   
      render json: TrackSerializer.new(track, options)
      end
     end
    

    
      
 private
  def track_params
    params.require(:track).permit(:title, :artist, :playlist, :playlist_id)
  end

end
