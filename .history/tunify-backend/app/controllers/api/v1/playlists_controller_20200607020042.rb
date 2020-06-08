class API::V1::PlaylistsController < ApplicationController

    def index
        @playlists = Playlist.all
        render json: @playlists
      end
    
      def show
      end
    
      def create
        @playlist = Playlist.create(playlist_params)
        binding.pry
        render json: @playlist
      end

      def update
        @playlist.update(playlist_params)
        render json: @playlist
      end
    
      def destroy
        @playlists = Playlist.all
        @playlist.destroy
      end
    
      private
  

      def playlist_params
        params.require(:playlist).permit(:name)
      end


end
