require 'rails_helper'

RSpec.describe Reportalert, type: :model do
  it 'successfully creates a new report alert' do
    testReportalert = Reportalert.new
    testReportalert.id = 'test id'
    expect(testReportalert.id ).to eq('test id') 

  end
end
