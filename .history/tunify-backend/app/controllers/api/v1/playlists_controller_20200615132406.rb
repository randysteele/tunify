class API::V1::PlaylistsController < ApplicationController
    
    def index 
      playlists = Playlist.all   
      options = {
        include: [:track]
      }
      
     
      render json: PlaylistSerializer.new(playlists, options)
    end     

    
    
      def create
        playlist = Playlist.create(playlist_params)
        if playlist.save
          options = {
            include:  [:tracks]
        }
        render json: PlaylistSerializer.new(playlist, options)
        else          
          render json: {errors: playlist.errors.full_messages}          
        end
      end


      private 

      def playlist_params
        params.require(:playlist).permit(:name, :track_id)
      end
end
