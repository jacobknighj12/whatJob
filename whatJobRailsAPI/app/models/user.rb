class User < ApplicationRecord
  devise :database_authenticatable,
         :jwt_authenticatable,
         :registerable,
         jwt_revocation_strategy: JwtDenylist

        validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true, allow_blank: false
         
          validates :first_name, :last_name, length: { minimum: 2, maximum: 60 }, allow_blank: false, format: { with: /[a-z\s.-]/i}


end
