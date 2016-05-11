class PhoneNumber < ActiveRecord::Base
  #validates etc for form input.
  belongs_to :contact
end