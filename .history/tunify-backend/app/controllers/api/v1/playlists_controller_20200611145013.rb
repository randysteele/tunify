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
        s_playlists = RSpotify::Playlist.find("7bntwjdswpqhrnqr0gssydbd0", "3oybL4xdKqkPO0ObreSPDM").track
        @playlists = s_playlists.map do |s_list|
        Playlist.new_from_spotify_track(s_list)
        end    
       
              options = {
           include: [:tracks]
             }        
        render json: PlaylistSerializer.new(@playlists, options)
      end

      def random
        s_tracks = RSpotify::Playlist.browse_featured.first.tracks
        @tracks = s_tracks.map do |s_track|
        Playlist.new_from_spotify_track(s_track)
        end
    
        render json: @tracks
      end

    
      def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save
        render json: @playlist
        else
          render json: {errors: playlist.errors.full_messages}
          
        end
        # byebug
      end

      def update
        @playlist.update(playlist_params)
        render json: @playlist
      end

      def show 
        @playlist = Playlist.find_by(params[:id])
      end
    
      def destroy
        @playlist = Playlist.all
        @playlist.destroy
      end
    
      private
  

      def playlist_params
        params.require(:playlist).permit(:name)
      end

# {"status":400,"error":"Bad Request","exception":"#\u003cActionController::ParameterMissing: param is missing or the value is empty: 
#playlist\u003e","traces":{"Application Trace":[{"exception_object_id":70100384913560,"id":1,"trace":
# "app/controllers/api/v1/playlists_controller.rb:55:in `playlist_params'"},{"exception_object_id":70100384913560,"id":2,"trace":
#"app/controllers/api/v1/playlists_controller.rb:33:in `create'"}],"Framework Trace":[{"exception_object_id":70100384913560,
#"id":0,"trace":"actionpack (6.0.3.1) lib/action_controller/metal/strong_parameters.rb:462:in `require'"},{"exception_object_id":70100384913560,
#"id":3,"trace":"actionpack (6.0.3.1) lib/action_controller/metal/basic_implicit_render.rb:6:in `send_action'"},{"exception_object_id":70100384913560,
#"id":4,"trace":"actionpack (6.0.3.1) lib/abstract_controller/base.rb:195:in `process_action'"},{"exception_object_id":70100384913560,"id":5,"trace":
#"actionpack (6.0.3.1) lib/action_controller/metal/rendering.rb:30:in `process_action'"},{"exception_object_id":70100384913560,"id":6,"trace":"actionpack
# (6.0.3.1) lib/abstract_controller/callbacks.rb:42:in `block in process_action'"},{"exception_object_id":70100384913560,"id":7,"trace":"activesupport 
#(6.0.3.1) lib/active_support/callbacks.rb:101:in `run_callbacks'"},{"exception_object_id":70100384913560,"id":8,"trace":"actionpack (6.0.3.1) 
#lib/abstract_controller/callbacks.rb:41:in `process_action'"},{"exception_object_id":70100384913560,"id":9,"trace":"actionpack (6.0.3.1) 
#lib/action_controller/metal/rescue.rb:22:in `process_action'"},{"exception_object_id":70100384913560,"id":10,"trace":"actionpack (6.0.3.1) 
#lib/action_controller/metal/instrumentation.rb:33:in `block in process_action'"},{"exception_object_id":70100384913560,"id":11,"trace":"activesupport 
#(6.0.3.1) lib/active_support/notifications.rb:180:in `block in instrument'"},{"exception_object_id":70100384913560,"id":12,"trace":"activesupport 
#(6.0.3.1) lib/active_support/notifications/instrumenter.rb:24:in `instrument'"},{"exception_object_id":70100384913560,"id":13,"trace":"activesupport 
#(6.0.3.1) lib/active_support/notifications.rb:180:in `instrument'"},{"exception_object_id":70100384913560,"id":14,"trace":"actionpack (6.0.3.1) 
#lib/action_controller/metal/instrumentation.rb:32:in `process_action'"},{"exception_object_id":70100384913560,"id":15,"trace":"actionpack (6.0.3.1) 
#lib/action_controller/metal/params_wrapper.rb:245:in `process_action'"},{"exception_object_id":70100384913560,"id":16,"trace":"activerecord (6.0.3.1) 
#lib/active_record/railties/controller_runtime.rb:27:in `process_action'"},{"exception_object_id":70100384913560,"id":17,"trace":"actionpack (6.0.3.1) 
#lib/abstract_controller/base.rb:136:in `process'"},{"exception_object_id":70100384913560,"id":18,"trace":"actionpack (6.0.3.1) lib/action_controller/metal.rb:190:in `dispatch'"},{"exception_object_id":70100384913560,"id":19,"trace":"actionpack (6.0.3.1) lib/action_controller/metal.rb:254:in `dispatch'"},{"exception_object_id":70100384913560,"id":20,"trace":"actionpack (6.0.3.1) lib/action_dispatch/routing/route_set.rb:50:in `dispatch'"},{"exception_object_id":70100384913560,"id":21,"trace":"actionpack (6.0.3.1) lib/action_dispatch/routing/route_set.rb:33:in `serve'"},{"exception_object_id":70100384913560,"id":22,"trace":"actionpack (6.0.3.1) lib/action_dispatch/journey/router.rb:49:in `block in serve'"},{"exception_object_id":70100384913560,"id":23,"trace":"actionpack (6.0.3.1) lib/action_dispatch/journey/router.rb:32:in `each'"},{"exception_object_id":70100384913560,"id":24,"trace":"actionpack (6.0.3.1) lib/action_dispatch/journey/router.rb:32:in `serve'"},{"exception_object_id":70100384913560,"id":25,"trace":"actionpack (6.0.3.1) lib/action_dispatch/routing/route_set.rb:834:in `call'"},{"exception_object_id":70100384913560,"id":26,"trace":"rack (2.2.2) lib/rack/etag.rb:27:in `call'"},{"exception_object_id":70100384913560,"id":27,"trace":"rack (2.2.2) lib/rack/conditional_get.rb:40:in `call'"},{"exception_object_id":70100384913560,"id":28,"trace":"rack (2.2.2) lib/rack/head.rb:12:in `call'"},{"exception_object_id":70100384913560,"id":29,"trace":"activerecord (6.0.3.1) lib/active_record/migration.rb:567:in `call'"},{"exception_object_id":70100384913560,"id":30,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/callbacks.rb:27:in `block in call'"},{"exception_object_id":70100384913560,"id":31,"trace":"activesupport (6.0.3.1) lib/active_support/callbacks.rb:101:in `run_callbacks'"},{"exception_object_id":70100384913560,"id":32,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/callbacks.rb:26:in `call'"},{"exception_object_id":70100384913560,"id":33,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/executor.rb:14:in `call'"},{"exception_object_id":70100384913560,"id":34,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/actionable_exceptions.rb:17:in `call'"},{"exception_object_id":70100384913560,"id":35,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/debug_exceptions.rb:32:in `call'"},{"exception_object_id":70100384913560,"id":36,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/show_exceptions.rb:33:in `call'"},{"exception_object_id":70100384913560,"id":37,"trace":"railties (6.0.3.1) lib/rails/rack/logger.rb:37:in `call_app'"},{"exception_object_id":70100384913560,"id":38,"trace":"railties (6.0.3.1) lib/rails/rack/logger.rb:26:in `block in call'"},{"exception_object_id":70100384913560,"id":39,"trace":"activesupport (6.0.3.1) lib/active_support/tagged_logging.rb:80:in `block in tagged'"},{"exception_object_id":70100384913560,"id":40,"trace":"activesupport (6.0.3.1) lib/active_support/tagged_logging.rb:28:in `tagged'"},{"exception_object_id":70100384913560,"id":41,"trace":"activesupport (6.0.3.1) lib/active_support/tagged_logging.rb:80:in `tagged'"},{"exception_object_id":70100384913560,"id":42,"trace":"railties (6.0.3.1) lib/rails/rack/logger.rb:26:in `call'"},{"exception_object_id":70100384913560,"id":43,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/remote_ip.rb:81:in `call'"},{"exception_object_id":70100384913560,"id":44,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/request_id.rb:27:in `call'"},{"exception_object_id":70100384913560,"id":45,"trace":"rack (2.2.2) lib/rack/runtime.rb:22:in `call'"},{"exception_object_id":70100384913560,"id":46,"trace":"activesupport (6.0.3.1) lib/active_support/cache/strategy/local_cache_middleware.rb:29:in `call'"},{"exception_object_id":70100384913560,"id":47,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/executor.rb:14:in `call'"},{"exception_object_id":70100384913560,"id":48,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/static.rb:126:in `call'"},{"exception_object_id":70100384913560,"id":49,"trace":"rack (2.2.2) lib/rack/sendfile.rb:110:in `call'"},{"exception_object_id":70100384913560,"id":50,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/host_authorization.rb:82:in `call'"},{"exception_object_id":70100384913560,"id":51,"trace":"rack-cors (1.1.1) lib/rack/cors.rb:100:in `call'"},{"exception_object_id":70100384913560,"id":52,"trace":"railties (6.0.3.1) lib/rails/engine.rb:527:in `call'"},{"exception_object_id":70100384913560,"id":53,"trace":"puma (4.3.5) lib/puma/configuration.rb:228:in `call'"},{"exception_object_id":70100384913560,"id":54,"trace":"puma (4.3.5) lib/puma/server.rb:713:in `handle_request'"},{"exception_object_id":70100384913560,"id":55,"trace":"puma (4.3.5) lib/puma/server.rb:472:in `process_client'"},{"exception_object_id":70100384913560,"id":56,"trace":"puma (4.3.5) lib/puma/server.rb:328:in `block in run'"},{"exception_object_id":70100384913560,"id":57,"trace":"puma (4.3.5) lib/puma/thread_pool.rb:134:in `block in spawn_thread'"}],"Full Trace":[{"exception_object_id":70100384913560,"id":0,"trace":"actionpack (6.0.3.1) lib/action_controller/metal/strong_parameters.rb:462:in `require'"},{"exception_object_id":70100384913560,"id":1,"trace":"app/controllers/api/v1/playlists_controller.rb:55:in `playlist_params'"},{"exception_object_id":70100384913560,"id":2,"trace":"app/controllers/api/v1/playlists_controller.rb:33:in `create'"},{"exception_object_id":70100384913560,"id":3,"trace":"actionpack (6.0.3.1) lib/action_controller/metal/basic_implicit_render.rb:6:in `send_action'"},{"exception_object_id":70100384913560,"id":4,"trace":"actionpack (6.0.3.1) lib/abstract_controller/base.rb:195:in `process_action'"},{"exception_object_id":70100384913560,"id":5,"trace":"actionpack (6.0.3.1) lib/action_controller/metal/rendering.rb:30:in `process_action'"},{"exception_object_id":70100384913560,"id":6,"trace":"actionpack (6.0.3.1) lib/abstract_controller/callbacks.rb:42:in `block in process_action'"},{"exception_object_id":70100384913560,"id":7,"trace":"activesupport (6.0.3.1) lib/active_support/callbacks.rb:101:in `run_callbacks'"},{"exception_object_id":70100384913560,"id":8,"trace":"actionpack (6.0.3.1) lib/abstract_controller/callbacks.rb:41:in `process_action'"},{"exception_object_id":70100384913560,"id":9,"trace":"actionpack (6.0.3.1) lib/action_controller/metal/rescue.rb:22:in `process_action'"},{"exception_object_id":70100384913560,"id":10,"trace":"actionpack (6.0.3.1) lib/action_controller/metal/instrumentation.rb:33:in `block in process_action'"},{"exception_object_id":70100384913560,"id":11,"trace":"activesupport (6.0.3.1) lib/active_support/notifications.rb:180:in `block in instrument'"},{"exception_object_id":70100384913560,"id":12,"trace":"activesupport (6.0.3.1) lib/active_support/notifications/instrumenter.rb:24:in `instrument'"},{"exception_object_id":70100384913560,"id":13,"trace":"activesupport (6.0.3.1) lib/active_support/notifications.rb:180:in `instrument'"},{"exception_object_id":70100384913560,"id":14,"trace":"actionpack (6.0.3.1) lib/action_controller/metal/instrumentation.rb:32:in `process_action'"},
#{"exception_object_id":70100384913560,"id":15,"trace":"actionpack (6.0.3.1) lib/action_controller/metal/params_wrapper.rb:245:in `process_action'"},{"exception_object_id":70100384913560,"id":16,"trace":"activerecord (6.0.3.1) lib/active_record/railties/controller_runtime.rb:27:in `process_action'"},{"exception_object_id":70100384913560,"id":17,"trace":"actionpack (6.0.3.1) lib/abstract_controller/base.rb:136:in `process'"},{"exception_object_id":70100384913560,"id":18,"trace":"actionpack (6.0.3.1) lib/action_controller/metal.rb:190:in `dispatch'"},{"exception_object_id":70100384913560,"id":19,"trace":"actionpack (6.0.3.1) lib/action_controller/metal.rb:254:in `dispatch'"},{"exception_object_id":70100384913560,"id":20,"trace":"actionpack (6.0.3.1) lib/action_dispatch/routing/route_set.rb:50:in `dispatch'"},{"exception_object_id":70100384913560,"id":21,"trace":"actionpack (6.0.3.1) lib/action_dispatch/routing/route_set.rb:33:in `serve'"},{"exception_object_id":70100384913560,"id":22,"trace":"actionpack (6.0.3.1) lib/action_dispatch/journey/router.rb:49:in `block in serve'"},{"exception_object_id":70100384913560,"id":23,"trace":"actionpack (6.0.3.1) lib/action_dispatch/journey/router.rb:32:in `each'"},{"exception_object_id":70100384913560,"id":24,"trace":"actionpack (6.0.3.1) lib/action_dispatch/journey/router.rb:32:in `serve'"},{"exception_object_id":70100384913560,"id":25,"trace":"actionpack (6.0.3.1) lib/action_dispatch/routing/route_set.rb:834:in `call'"},{"exception_object_id":70100384913560,"id":26,"trace":"rack (2.2.2) lib/rack/etag.rb:27:in `call'"},{"exception_object_id":70100384913560,"id":27,"trace":"rack (2.2.2) lib/rack/conditional_get.rb:40:in `call'"},{"exception_object_id":70100384913560,"id":28,"trace":"rack (2.2.2) lib/rack/head.rb:12:in `call'"},{"exception_object_id":70100384913560,"id":29,"trace":"activerecord (6.0.3.1) lib/active_record/migration.rb:567:in `call'"},{"exception_object_id":70100384913560,"id":30,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/callbacks.rb:27:in `block in call'"},{"exception_object_id":70100384913560,"id":31,"trace":"activesupport (6.0.3.1) lib/active_support/callbacks.rb:101:in `run_callbacks'"},{"exception_object_id":70100384913560,"id":32,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/callbacks.rb:26:in `call'"},{"exception_object_id":70100384913560,"id":33,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/executor.rb:14:in `call'"},{"exception_object_id":70100384913560,"id":34,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/actionable_exceptions.rb:17:in `call'"},{"exception_object_id":70100384913560,"id":35,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/debug_exceptions.rb:32:in `call'"},{"exception_object_id":70100384913560,"id":36,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/show_exceptions.rb:33:in `call'"},{"exception_object_id":70100384913560,"id":37,"trace":"railties (6.0.3.1) lib/rails/rack/logger.rb:37:in `call_app'"},{"exception_object_id":70100384913560,"id":38,"trace":"railties (6.0.3.1) lib/rails/rack/logger.rb:26:in `block in call'"},{"exception_object_id":70100384913560,"id":39,"trace":"activesupport (6.0.3.1) lib/active_support/tagged_logging.rb:80:in `block in tagged'"},{"exception_object_id":70100384913560,"id":40,"trace":"activesupport (6.0.3.1) lib/active_support/tagged_logging.rb:28:in `tagged'"},{"exception_object_id":70100384913560,"id":41,"trace":"activesupport (6.0.3.1) lib/active_support/tagged_logging.rb:80:in `tagged'"},{"exception_object_id":70100384913560,"id":42,"trace":"railties (6.0.3.1) lib/rails/rack/logger.rb:26:in `call'"},{"exception_object_id":70100384913560,"id":43,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/remote_ip.rb:81:in `call'"},{"exception_object_id":70100384913560,"id":44,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/request_id.rb:27:in `call'"},{"exception_object_id":70100384913560,"id":45,"trace":"rack (2.2.2) lib/rack/runtime.rb:22:in `call'"},{"exception_object_id":70100384913560,"id":46,"trace":"activesupport (6.0.3.1) lib/active_support/cache/strategy/local_cache_middleware.rb:29:in `call'"},{"exception_object_id":70100384913560,"id":47,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/executor.rb:14:in `call'"},{"exception_object_id":70100384913560,"id":48,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/static.rb:126:in `call'"},{"exception_object_id":70100384913560,"id":49,"trace":"rack (2.2.2) lib/rack/sendfile.rb:110:in `call'"},{"exception_object_id":70100384913560,"id":50,"trace":"actionpack (6.0.3.1) lib/action_dispatch/middleware/host_authorization.rb:82:in `call'"},{"exception_object_id":70100384913560,"id":51,"trace":"rack-cors (1.1.1) lib/rack/cors.rb:100:in `call'"},{"exception_object_id":70100384913560,"id":52,"trace":"railties (6.0.3.1) lib/rails/engine.rb:527:in `call'"},{"exception_object_id":70100384913560,"id":53,"trace":"puma (4.3.5) lib/puma/configuration.rb:228:in `call'"},{"exception_object_id":70100384913560,"id":54,"trace":"puma (4.3.5) lib/puma/server.rb:713:in `handle_request'"},{"exception_object_id":70100384913560,"id":55,"trace":"puma (4.3.5) lib/puma/server.rb:472:in `process_client'"},{"exception_object_id":70100384913560,"id":56,"trace":"puma (4.3.5) lib/puma/server.rb:328:in `block in run'"},{"exception_object_id":70100384913560,"id":57,"trace":"puma (4.3.5) lib/puma/thread_pool.rb:134:in `block in spawn_thread'"}]}}
end
