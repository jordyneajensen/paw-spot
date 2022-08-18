require 'rails_helper'

RSpec.describe "Spots", type: :request do
  describe "GET /index" do
    it 'returns a list of spots' do
    
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

      user.spots.create(
        name: "Buzz Coffee",
        street: "123 other way",
        city: "San Diego",
        state: "CA",
        zip: "22400",
        description: "pet friendly spot one",
        image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
      )
  
   get '/spots'

      spots = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(spots.length).to eq(1)
    end
  end
end
