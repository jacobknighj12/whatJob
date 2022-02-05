# Preview all emails at http://localhost:3000/rails/mailers/contactmessage_mailer
class ContactmessageMailerPreview < ActionMailer::Preview
    def new_message_email
        @contactmessage = Contactmessage.new(name: 'Luke', email: 'luke@email.com', message: 'Testing to see if it works')
        ContactmessageMailer.with(message: @contactmessage).new_message_email
    end

end
