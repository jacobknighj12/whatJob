require 'rails_helper'

RSpec.describe Reportalert, type: :model do
  it 'successfully creates a new report alert' do
    testReportalert = Reportalert.new
    testReportalert.id = (1)
    expect(testReportalert.id ).to eq(1) 

  end
end
