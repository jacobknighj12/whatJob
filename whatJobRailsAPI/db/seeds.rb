# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

categories = ["Accounting", "Administration & Office Support", "Advertising, Arts & Media", "Banking & Financial Services", "Call Centre & Customer Service", "CEO & General Management", "Community Services & Development", "Construction", "Consulting & Strategy", "Design & Architecture", "Education & Training", "Engineering", "Farming, Animals & Conservation", "Government & Defence", "Healthcare & Medical",  "Hospitality & Tourism", "Human Resources & Recruitment", "Information & Communication Technology", "Insurance & Superannuation", "Legal", "Manufacturing, Transport & Logistics", "Marketing Communications", "Mining, Resources & Energy", "Real Estate & Property", "Retail & Consumer Products Sales", "Science & Technology", "Self Employment", "Sport & Recreation", "Trades & Services"]

if Category.all.length == 0
    categories.each do |category|
        Category.create(name: category)
        puts "created #{category} category"
    end
end