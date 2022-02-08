require 'rails_helper'

RSpec.describe Contactmessage, type: :model do
  it 'successfully creates a new contactmessage' do
    testContactmessage = Post.new
    testContactmessage.name = 'test name'
    testContactmessage.email = 'test email'
    testContactmessage.message = 'test message'
    expect(testContactmessage.name).to eq('test name') 
    expect(testContactmessage.email).to eq('test email') 
    expect(testContactmessage.message).to eq(test message) 
  end
end
