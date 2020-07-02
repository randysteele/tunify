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
      track = Track.create(track_params)
      render json: TrackSerializer.new(track)
     end

    #  def create
    #   track = Playlist.new(track_params)
    #   if playlist.save          
    #     options = {
    #       include:  [:playlist]
    #   }
    #   render json: TrackSerializer.new(track, options)
    #   else          
    #     render json: {errors: track.errors.full_messages}          
    #   end
    # end

    
      
 private
  def track_params
    params.require(:track).permit(:title, :artist, :playlist_id)
  end

end
