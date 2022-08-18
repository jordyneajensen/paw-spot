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

    describe "POST /create" do
    
      it"creates a new listing" do
        user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
    
        spot_params ={
          spot: {
            name: "Buzz Coffee",
            street: "123 other way",
            city: "San Diego",
            state: "CA",
            zip: "22400",
            description: "pet friendly spot one",
            image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
            user_id: user.id  

        }
      }
    
      post '/spots', params: spot_params

      spot = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      
      expect(spot['name']).to eq "Buzz Coffee"
      expect(spot['street']).to eq "123 other way"
      expect(spot['city']).to eq "San Diego"
      expect(spot['state']).to eq "CA"
      expect(spot['zip']).to eq "22400"
      expect(spot['description']).to eq "pet friendly spot one"
      expect(spot['image']).to eq "https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg"
    end

      it "doesn't create a spot without a name" do

        user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

        spot_params = {
          spot: {
              street: "123 other way",
              city: "San Diego",
              state: "CA",
              zip: "22400",
              description: "pet friendly spot one",
              image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
              user_id: user.id  
          }
        }
  
        post "/spots", params: spot_params
        expect(response.status).to eq 422
        spot = JSON.parse(response.body)
        expect(spot['name']).to include "can't be blank" 
      end

      it "doesn't create a spot without a street" do

        user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

        spot_params = {
          spot: {
              name: "Buzz Coffee",
              city: "San Diego",
              state: "CA",
              zip: "22400",
              description: "pet friendly spot one",
              image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
              user_id: user.id  
          }
        }
  
        post "/spots", params: spot_params
        expect(response.status).to eq 422
        spot = JSON.parse(response.body)
        expect(spot['street']).to include "can't be blank" 
      end

      it "doesn't create a spot without a city" do

        user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

        spot_params = {
          spot: {
              name: "Buzz Coffee",
              street: "123 other way",
              state: "CA",
              zip: "22400",
              description: "pet friendly spot one",
              image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
              user_id: user.id  
          }
        }
  
        post "/spots", params: spot_params
        expect(response.status).to eq 422
        spot = JSON.parse(response.body)
        expect(spot['city']).to include "can't be blank" 
      end
      it "doesn't create a spot without a state" do

        user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

        spot_params = {
          spot: {
              name: "Buzz Coffee",
              street: "123 other way",
              city: "San Diego",
              zip: "22400",
              description: "pet friendly spot one",
              image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
              user_id: user.id  
          }
        }
  
        post "/spots", params: spot_params
        expect(response.status).to eq 422
        spot = JSON.parse(response.body)
        expect(spot['state']).to include "can't be blank" 
      end

      it "doesn't create a spot without a zip" do

        user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

        spot_params = {
          spot: {
              name: "Buzz Coffee",
              street: "123 other way",
              city: "San Diego",
              state: "CA",
              description: "pet friendly spot one",
              image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
              user_id: user.id  
          }
        }
  
        post "/spots", params: spot_params
        expect(response.status).to eq 422
        spot = JSON.parse(response.body)
        expect(spot['zip']).to include "can't be blank" 
      end

      it "doesn't create a spot without a description" do

        user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

        spot_params = {
          spot: {
              name: "Buzz Coffee",
              street: "123 other way",
              city: "San Diego",
              state: "CA",
              zip: "22400",
              image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
              user_id: user.id  
          }
        }
  
        post "/spots", params: spot_params
        expect(response.status).to eq 422
        spot = JSON.parse(response.body)
        expect(spot['description']).to include "can't be blank" 
      end

      it "doesn't create a spot without an image " do

        user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

        spot_params = {
          spot: {
              name: "Buzz Coffee",
              street: "123 other way",
              city: "San Diego",
              state: "CA",
              zip: "22400",
              description: "pet friendly spot one",
              user_id: user.id  
          }
        }
  
        post "/spots", params: spot_params
        expect(response.status).to eq 422
        spot = JSON.parse(response.body)
        expect(spot['image']).to include "can't be blank" 
      end     
  end
  
   describe "PATCH /update" do
    
      it"updates an existing spot" do
        user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
    
        spot_params ={
          spot: {
            name: "Buzz Coffee",
            street: "123 other way",
            city: "San Diego",
            state: "CA",
            zip: "22400",
            description: "pet friendly spot one",
            image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
            user_id: user.id  

        }
      }
    
      post '/spots', params: spot_params
      spot = Spot.first

      updated_spot_params = {
        spot: {
            name: "Buzz Coffee",
            street: "123 other way",
            city: "San Diego",
            state: "california",
            zip: "22400",
            description: "pet friendly spot one",
            image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
            user_id: user.id  

        }
      }

        patch "/spots/#{spot.id}", params: updated_spot_params
        updated_spot = Spot.find(spot.id)
        expect(response).to have_http_status(200)
        
        expect(updated_spot.state).to eq "california"

      end
  end
end
