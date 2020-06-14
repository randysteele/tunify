class API::V1::TracksController < ApplicationController
    def index
        @tracks = Track.all
    
        
        render json: TrackSerializer.new(@tracks, {include: [:playlist]}).serialized_json
        
      end

      def create 
        @track = Track.new
        if track.save
          render json: TrackSerializer.new(@tracks, {include: [:playlist]}).serialized_json
        end
      end
    

     def show 
      @track = Track.find_by(params[:id])
      
      render json: TrackSerializer.new(@tracks, {include: [:playlist]}).serialized_json
    
      
 private
  def tradk_params
    params.require(:track).permit(:name, :artist, :image,)

end
