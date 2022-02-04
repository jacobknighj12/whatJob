require 'rails_helper'

RSpec.describe Category, type: :model do

  it 'creates a new category called acat' do
    cat = Category.new
    cat.name = 'acat'
    expect(cat.name).to eq('acat') 
  end

  it 'retrives the first category which is Accounting' do
    cat = Category.first
<<<<<<< HEAD
    cat.name = 'Accounting'
    expect(cat.name).to eq('Accounting') 
=======
    cat = 'Accounting'
    expect(cat).to eq('Accounting') 
>>>>>>> main
  end


  
end
