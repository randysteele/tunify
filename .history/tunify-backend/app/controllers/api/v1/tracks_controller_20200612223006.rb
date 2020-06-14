class API::V1::TracksController < ApplicationController
    def index
        @tracks = Track.all
    
        # options = {
        #     include:  [:playlist]
        # }
        # render json: TrackSerializer.new(@tracks, options)
        render json: TrackSerializer.new(@tracks)
      end

      def create 
        @track = Track.create
        if track.save
          render json: @track
        end
      end
    
      
     
    
      
    
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
