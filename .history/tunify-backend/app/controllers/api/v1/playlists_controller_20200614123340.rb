class API::V1::PlaylistsController < ApplicationController
    
    def index 
      playlists = Playlist.all   
     
      render json: PlaylistSerializer.new(playlists)
    end     

    
    
      def create
        playlist = Playlist.new(playlist_params)
        if playlist.save
         
        render json: PlaylistSerializer.new(playlist)
        else
          
          render json: {errors: @playlist.errors.full_messages}          
        end
      end


      private 

      def playlist_params
        params.require(:playlist).permit(:name, :artist, :image, :track_id)
      end
end
