# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.where(email: 'test1@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')
user2 = User.where(email: 'test2@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')


user_spot_one = [
  #street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string image:text user_id:integer
  {
    name: "Buzz Coffee",
    street: "123 other way",
    city: "San Diego",
    state: "CA",
    zip: "22400",
    description: "pet friendly spot one",
    image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
    category: "Coffee"
  },
  {
    name: "Sandwhich Shop",
    street: "123 random way",
    city: "San Diego",
    state: "CA",
    zip: "91911",
    description: "pet friendly spot two",
    image:"https://i.ytimg.com/vi/-paNTBJMcO0/maxresdefault.jpg",
    category: "Resturaunt"
  }
  
]

user_spot_two = [
    {
        name: "Retail Store",
        street: "245 other way",
        city: "San Diego",
        state: "CA",
        zip: "22400",
        description: "pet friendly spot three",
        image:"https://i0.wp.com/sarahmarotta.com/wp-content/uploads/2019/04/stores-allow-dogs-7.jpg?resize=683%2C1024",
        category: "Retail"
      },
      {
        name: "Dog Beach",
        street: "245 random way",
        city: "San Diego",
        state: "CA",
        zip: "92107",
        description: "pet friendly spot four",
        image:"https://www.akc.org/wp-content/uploads/2017/08/Golden-Retriever-fetching-a-ball-on-the-beach-500x485.jpeg",
        category: "Beach"
      }
    
]



user_spot_one.each do |attributes|
    user1.spots.create(attributes)
    p"each pet-friendly spots attributes #{attributes}"
  end

  user_spot_two.each do |attributes|
    user2.spots.create(attributes)
    p"each pet-friendly spots attributes #{attributes}"
  end