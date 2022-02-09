class Contactmessage < ApplicationRecord

    # Name not required but can only be alpha characters
    validates_format_of :name, with: /[a-z\s.-]/i
    # Message is required, but most characters are acceptable.
    validates_format_of :message, allow_blank: false, with: /[A-Za-z0-9 _\-.,;#&!?"'\\/$()%]*/
    # Email is required, formatting using the inbuilt email Regex
    validates :email,  allow_blank: false,  format: { with: URI::MailTo::EMAIL_REGEXP }
end
