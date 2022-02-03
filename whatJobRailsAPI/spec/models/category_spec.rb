require 'rails_helper'

RSpec.describe Category, type: :model do

  it 'defaults' do
    cat = Category.new
    cat.name = 'acat'
    expect(cat.name).to eq('acat') 
  end


  
end
