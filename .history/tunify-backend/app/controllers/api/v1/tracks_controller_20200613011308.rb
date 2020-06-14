class API::V1::TracksController < ApplicationController
    def index
        @tracks = Track.all
    
        options = {
            include:  [:playlist, :tracks]
        }
        render json: TrackSerializer.new(@tracks, options)
        
      end

      def create 
        @track = Track.create
        if track.save
          render json: TrackSerializer.new(@track)
        end
      end
    

     def show 
      @track = Track.find_by(params[:id])
     
      render json: TrackSerializer.new(@track)
    
      
 private
  def tradk_params
    params.require(:track).permit(:name, :artist, :image,)

end
