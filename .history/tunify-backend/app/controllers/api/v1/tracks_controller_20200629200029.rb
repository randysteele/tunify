class API::V1::TracksController < ApplicationController
  
  
  def index
        tracks = Track.all      
        render json: TrackSerializer.new(tracks)       
   end


     def create 
      track = Track.create(track_params)
      # if track.save
   
      render json: TrackSerializer.new(track)
      byebug
    # else 
    #   render json: {errors: track.errors.full_messages}
    #   end
    end
  
      
 private
  def track_params
    params.require(:track).permit(:title, :artist, :playlist_id, :id)
  end
end
