class AddContacts < ActiveRecord::Migration
   create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.timestamps null: false
    end
  end
