    class ApplicationController < ActionController

      def index
        @playlists = Playlist.all
        options = {
          
          include: [:tracks]
        }
        
        render json: PlaylistSerializer.new(@playlists, options)
      end

       
      end

