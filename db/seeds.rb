# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroying photos and characters"

Photo.destroy_all
Character.destroy_all

puts "Creating photo"

Photo.create(url: 'waldo-map1.jpg')

characters = [
  { id: 0, name: 'waldo' },
  { id: 1, name: 'wenda' },
  { id: 2, name: 'odlaw' },
  { id: 3, name: 'woof' },
  { id: 4, name: 'wizard whitebeard' }
]

characters.each do |character| 
  Photo.first.characters.create(name: character[:name])
end



