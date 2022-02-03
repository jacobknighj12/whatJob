class MembersController < ApplicationController
  before_action do
    puts "session #{session}"
    puts "MembersController#before_action"
    authenticate_user!
  end
  
      
    def show
      render json: { message: "If you see this, you're in!" }
    end
end


