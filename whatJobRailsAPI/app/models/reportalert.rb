class Reportalert < ApplicationRecord
    belongs_to :post
    
    # postId is requireand only accepts integer
    # validates :postid, numericality: {only_integer: true}
    
end
