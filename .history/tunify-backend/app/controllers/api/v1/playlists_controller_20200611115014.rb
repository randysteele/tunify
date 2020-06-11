class API::V1::PlaylistsController < ApplicationController

    def index
        @playlists = Playlist.all
    #     options = {
    #       include: [:tracks]
    # }        
    #    render json: PlaylistSerializer.new(@playlists, options)
    render json: @playlists
      end   
      

      def top_country
        s_playlists = RSpotify::Playlist.find("7bntwjdswpqhrnqr0gssydbd0", "3oybL4xdKqkPO0ObreSPDM").tracks
        @playlists = s_playlists.map do |s_list|
        Playlist.new_from_spotify_track(s_list)
        end    
       
        render json: PlaylistSerializer.new(@playlists)
      end

      def random
        s_tracks = RSpotify::Playlist.browse_featured.first.tracks
        @tracks = s_tracks.map do |s_track|
        Playlist.new_from_spotify_track(s_track)
        end
    
        render json: @tracks
      end

    
      def create
        @playlist = Playlist.create
        render json: @playlist
      end

      def update
        @playlist.update
        render json: @playlist
      end

      def show 
        @playlist = Playlist.find_by(params[:id])
      end
    
      def destroy
        @playlists = Playlist.all
        @playlist.destroy
      end
    
      private
  

      # def playlist_params
      #   params.require(:playlist).permit(:name)
      # end


end
