class API::V1::TracksController < ApplicationController
    def index
        @tracks = Track.all
    
        options = {
            include:  [:playlist]
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
    
      
    
      # def search
      #   s_tracks = RSpotify::Track.search(params[:q])
      #   @tracks = s_tracks.map do |s_track|
      #   Track.new_from_spotify_track(s_track)
      #   end
    
      #   render json: @tracks
      # end

# def show 
#     @track = Track.find_by_id(params[:id])
# end

end
