class Contactmessage < ApplicationRecord


    validates_format_of :name with: /[a-z\s.-]/i
    validates_format_of :message, with: /\A[a-zA-Z0-9 ,.;'"+-?!%$]*(?:\R[a-zA-Z0-9 ,.;'"+-?!%$]*)*\z/
    validates_format_of :intro, with: /\A[a-zA-Z0-9 ,.;'"+-?!%$]*(?:\R[a-zA-Z0-9 ,.;'"+-?!%$]*)*\z/
    validates :email,  presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
end
