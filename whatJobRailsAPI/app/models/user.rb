class User < ApplicationRecord
  devise :database_authenticatable,
         :jwt_authenticatable,
         :registerable,
         jwt_revocation_strategy: JwtDenylist

         has_many :category
         has_many :posts

         validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true, presence: true
         validates_format_of :first_name, :last_name, with: /[a-z\s.-]/i
        #  validates_format_of :last_name, with: /[a-z\s.-]/i

end
