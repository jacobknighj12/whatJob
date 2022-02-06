class ContactmessagesController < ApplicationController


    def index
        @contactmessage = Contactmessage.all
        render json: @contactmessage, status: 201
    end

    def create
        @contactmessage = Contactmessage.create(contactmessage_params)
        if @contactmessage.save
            ContactmessageMailer.with(contactmessage: @contactmessage).new_message_email.deliver_later
        # else @contactmessage.errors.any?
        #     render json: @contactmessage.errors, status: :unprocessable_entity
        # elsif
        #     render json: @contactmessage, status: 201
        # end
        end
    end
end



private
    def contactmessage_params
        params.permit(:name, :email, :message,)
    end