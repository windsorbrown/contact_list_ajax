
200.times do
  contact = Contact.new(
         first_name: Faker::Name.first_name,
          last_name: Faker::Name.last_name,
          email: Faker::Internet.email
  )
  contact.save
end

