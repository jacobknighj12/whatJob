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



  # before_action do
  #   MemberDb.setup
  # end

#   def show
#     render json: {
#       member: MemberDb.member(params[:id].to_i)
#     }
#   end

#   def delete
#     success = nil
#     begin
#       MemberDb.delete_member(params[:id].to_i)
#       success = true
#     rescue e
#       puts e
#       success = false
#     end

#     render json: {
#       success: success
#     }
#   end

#   def update
#     success = nil
#     begin
#       MemberDb.update_member(params[:id].to_i, params[:name], params[:age], params[:height])
#       success = true
#     rescue e
#       puts e
#       success = false
#     end

#     render json: {
#       success: success
#     }
#   end

#   def create
#     success = nil
#     begin
#       MemberDb.add_member(params[:name], params[:age], params[:height])
#       success = true
#     rescue e
#       puts e
#       success = false
#     end

#     render json: {
#       success: success
#     }
#   end

#   def index
#     render json: {
#       members: MemberDb.members
#     }
#   end
# end
