class API::V1::PlaylistsController < ApplicationController
    
    def index 
      @playlists = Playlist.all
      render json: PlaylistSerializer.new(@playlists)
    end     

    
      def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save
          render json: PlaylistSerializer.new(@playlist)
        else
          render json: {errors: @playlist.errors.full_messages}          
        end
      end

      def update
        @playlist.update(playlist_params)
        render json: @playlist
      end

      # def show 
      #   @playlist = Playlist.find_by_id(params[:id])
      #   render json: PlaylistSerializer.new(@playlist)
      # end
    
      def destroy
        @playlist = Playlist.all
        @playlist.destroy
      end
    
      private
  

      def playlist_params
        params.require(:playlist).permit(:name, :artist, :image)
      end
end
