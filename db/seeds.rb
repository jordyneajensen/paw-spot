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
    name: "Moniker Coffe Co.",
    street: "2860 Sims Rd. ",
    city: "San Diego",
    state: "CA",
    zip: "92106",
    description: "Airy-industrial outpost serving elevated coffee drinks plus a retail concept alongside baked goods.",
    image:"https://images.hellogiggles.com/uploads/2017/06/23025549/coffeedoggettyimages-585356343-e1498237725281.jpg",
    category: "Coffee"
  },
  {
    name: "Lazy Dog",
    street: "1202 Camino Del Rio N",
    city: "San Diego",
    state: "CA",
    zip: "92108",
    description: "Relaxed, lodge-chic chain serving global comfort fare, including stir-fries, pot roast & pastas.",
    image:"https://i.ytimg.com/vi/-paNTBJMcO0/maxresdefault.jpg",
    category: "Resturaunt"
  },
  {
    name: "Station Tavern",
    street: "2204 Fern St",
    city: "San Diego",
    state: "CA",
    zip: "92104",
    description: "Open-air, modern beer garden has comfort food, craft beers, outdoor dining & a play area for kids.",
    image:"https://image.petmd.com/files/petmd-alcohol-risks.jpg",
    category: "Bar"
  }
  
]

user_spot_two = [
    {
        name: "Westfield UTC",
        street: "4545 La Jolla Village Dr",
        city: "Sandiego",
        state: "CA",
        zip: "92122",
        description: "Westfield UTC is a fabulous, dog-friendly, open-air shopping (120 boutiques) area in San Diego, CA. Not all shops are dog-friendly so be sure to check with staff first before entering with Fido. Fido is also welcome to visit the Bark Park located behind the Clock Tower in Palm Plaza. Take the hill going down in between Tender Greens and Express to find the lush, fully fenced in dog park for your dog to enjoy.",
        image:"https://i0.wp.com/sarahmarotta.com/wp-content/uploads/2019/04/stores-allow-dogs-7.jpg?resize=683%2C1024",
        category: "Retail"
      },
      {
        name: "Dog Beach",
        street: "Dog Beach",
        city: "San Diego",
        state: "CA",
        zip: "92109",
        description: "The Original Dog Beach is wide and sandy, with a lot of space for pups to play and swim. It's one of the most popular off-leash dog beaches in San Diego as there are no hourly restrictions. The off-leash area can be found in the northern part, where the sand meets the mouth of the San Diego River.",
        image:"https://www.akc.org/wp-content/uploads/2017/08/Golden-Retriever-fetching-a-ball-on-the-beach-500x485.jpeg",
        category: "Beach"
      },
      {
        name: "Morley Field Dog Park",
        street: "2225 Morley Field Dr",
        city: "San Diego",
        state: "CA",
        zip: "92104",
        description: "Scenic dog park in a canyon, with adjacent hiking trails & a grassy field for off-leash exploring.",
        image:"https://www.aacounty.org/sebin/n/m/dogpark.jpg",
        category: "Park"
      }
    




user_spot_one.each do |attributes|
    user1.spots.create(attributes)
    p"each pet-friendly spots attributes #{attributes}"
  end

  user_spot_two.each do |attributes|
    user2.spots.create(attributes)
    p"each pet-friendly spots attributes #{attributes}"
  end