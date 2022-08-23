require 'rails_helper'

RSpec.describe Spot, type: :model do
  user = User.where(email: 'test1@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

  it 'checks that Spot exists' do
    spot = user.spots.create(
      name: "Buzz Coffee",
      street: "123 other way",
      city: "San Diego",
      state: "CA",
      zip: "22400",
      description: "pet friendly spot one",
      category: "Coffee",
      image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
    )
    expect(spot).to be_valid
  end
  it 'is not valid without a name' do
    spot = user.spots.create(
      street: "123 other way",
      city: "San Diego",
      state: "CA",
      zip: "22400",
      description: "pet friendly spot one",
      category: "Coffee",
      image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
    )
    expect(spot.errors[:name]).to_not be_empty
  end
  it 'is not valid without a street' do
    spot = user.spots.create(
      name: "Buzz Coffee",
      city: "San Diego",
      state: "CA",
      zip: "22400",
      description: "pet friendly spot one",
      category: "Coffee",
      image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
    )
    expect(spot.errors[:street]).to_not be_empty
  end
  it 'is not valid without a city' do
    spot = user.spots.create(
      name: "Buzz Coffee",
      street: "123 other way",
      state: "CA",
      zip: "22400",
      description: "pet friendly spot one",
      category: "Coffee",
      image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
    )
    expect(spot.errors[:city]).to_not be_empty
  end
  it 'is not valid without a state' do
    spot = user.spots.create(
      name: "Buzz Coffee",
      street: "123 other way",
      city: "San Diego",
      zip: "22400",
      description: "pet friendly spot one",
      category: "Coffee",
      image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
    )
    expect(spot.errors[:state]).to_not be_empty
  end
  it 'is not valid without a zip' do
    spot = user.spots.create(
      name: "Buzz Coffee",
      street: "123 other way",
      city: "San Diego",
      state: "CA",
      description: "pet friendly spot one",
      category: "Coffee",
      image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
    )
    expect(spot.errors[:zip]).to_not be_empty
  end
  it 'is not valid without a description' do
    spot = user.spots.create(
      name: "Buzz Coffee",
      street: "123 other way",
      city: "San Diego",
      state: "CA",
      zip: "22400",
      category: "Coffee",
      image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
    )
    expect(spot.errors[:description]).to_not be_empty
  end
  it 'is not valid without an image' do
    spot = user.spots.create(
      name: "Buzz Coffee",
      street: "123 other way",
      city: "San Diego",
      state: "CA",
      zip: "22400",
      description: "pet friendly spot one",
      category: "Coffee"
    )
    expect(spot.errors[:image]).to_not be_empty
  end
  it 'is not valid without a category' do
    spot = user.spots.create(
      name: "Buzz Coffee",
      street: "123 other way",
      city: "San Diego",
      state: "CA",
      zip: "22400",
      description: "pet friendly spot one",
      image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
    )
    expect(spot.errors[:category]).to_not be_empty
  end
end
