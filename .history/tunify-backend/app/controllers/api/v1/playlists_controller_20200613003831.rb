class API::V1::PlaylistsController < ApplicationController
    
    def index 
      @playlists = Playlist.all
      options = {
            include:  [:tracks]
        }
        render json: PlaylistSerializer.new(@playlists, options)
    end     

    
      def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save
          options = {
            include:  [:tracks]
        }
        render json: PlaylistSerializer.new(@playlist, options)
        else
          
          render json: {errors: @playlist.errors.full_messages}          
        end
      end

      # def update
      #   @playlist.update(playlist_params)
      #   render json: @playlist
      # end

     
    
      # def destroy
      #   @playlist = Playlist.all
      #   @playlist.destroy
      # end
    
      private
  

      def playlist_params
        params.require(:playlist).permit(:name, :artist, :image, :tracks)
      end
end
