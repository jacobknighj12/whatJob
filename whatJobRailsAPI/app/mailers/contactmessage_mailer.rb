class ContactmessageMailer < ApplicationMailer
    def new_message_email
        @contactmessage = params[:contactmessage]
        mail(to: '<whatjob321@gmail.com>', subject: "You have a new contact form")
    end
end
