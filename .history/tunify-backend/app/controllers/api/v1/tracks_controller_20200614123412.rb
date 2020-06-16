class API::V1::TracksController < ApplicationController
  
  
  def index
        tracks = Track.all
       
        render json: TrackSerializer.new(tracks)
        
      end

      def create 
        track = Track.new
        if track.save
          render json: TrackSerializer.new(track)
        end
      end
    

     def show 
      @track = Track.find_by(params[:id])
      
      render json: TrackSerializer.new(@track)
     end
    
      
 private
  def track_params
    params.require(:track).permit(:name, :artist, :image)
  end

end
