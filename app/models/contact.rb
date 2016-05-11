class Contact < ActiveRecord::Base
  #validates etc for form input.
  has_many :phone_numbers
end
