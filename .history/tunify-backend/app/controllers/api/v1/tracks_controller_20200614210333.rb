class API::V1::TracksController < ApplicationController
  
  
  def index
        tracks = Track.all     
        options ={
          include: [:playlist]
        }  
        render json: TrackSerializer.new(tracks, options)
        
      end

      def create 
        track = Track.new
        if track.save
          options ={
          include: [:playlist]
        }  
          render json: TrackSerializer.new(track, options)
        end
      end
    

#      def show 
#       @track = Track.find_by(params[:id])
      
#       render json: TrackSerializer.new(@track)
#      end
    
      
 private
  def track_params
    params.require(:track).permit(:name, :artist, :playlist_id)
  end

end
