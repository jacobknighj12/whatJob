class Contactmessage < ApplicationRecord

    # Name not required but can only be alpha characters
    validates_format_of :name, with: /[a-z\s.-]/i
    # Message is required, but most characters are acceptable.
    validates_format_of :message, allow_blank: false, with: /\A[a-zA-Z0-9 ,.;'"+-?!%$]*(?:\R[a-zA-Z0-9 ,.;'"+-?!%$]*)*\z/
    # Email is required, formatting using the inbuilt email Regex
    validates :email,  allow_blank: false,  format: { with: URI::MailTo::EMAIL_REGEXP }
end
