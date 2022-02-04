class ContactmessagesController < ApplicationController


    def index
        @contactmessage = Contactmessage.all
        render json: @contactmessage, status: 201
    end

    def create
        @contactmessage = Contactmessage.create(contactmessage_params)
        if @contactmessage.errors.any?
            render json: @contactmessage.errors, status: :unprocessable_entity
        else
            render json: @contactmessage, status: 201
        end
    end
end



private
    def contactmessage_params
        params.permit(:name, :email, :message,)
    end