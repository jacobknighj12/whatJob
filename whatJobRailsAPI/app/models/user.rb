class User < ApplicationRecord
  devise :database_authenticatable,
         :jwt_authenticatable,
         :registerable,
         jwt_revocation_strategy: JwtDenylist

         

         has_many :category
         has_many :posts

         validates :email, presence: true, uniqueness: true
end
