class ApplicationController < ActionController::API

    class ApplicationController < ActionContoller::API
        def test
          render json: { test: "success" }
        end
      end

      
end
