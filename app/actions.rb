# Homepage (Root path)
get '/' do
   #Contact.all.to_json
  erb :index
end

get '/list_all' do
  @contacts = Contact.all.limit(10)
  @contacts = @contacts.to_json
end


get '/search/' do
  name = params[:name]
  email = params[:email]
  @contacts = Contact.where("first_name LIKE ? OR email LIKE ? OR last_name LIKE ?" ,"%#{name}%", "%#{name}%", "%#{name}%" )
 # @contacts = Contact.all.limit(10)
  @contacts = @contacts.to_json
end


get '/show/:id' do
  id = params[:id]
  @contact = Contact.find(id)
  @contact = @contact.to_json
end


post '/new' do
  first_name = params[:first_name]
  last_name = params[:last_name]
  email = params[:email]
  contact = Contact.new(first_name: first_name, last_name: last_name , email: email)
  contact.save
  { :id => contact.id, :message => 'contact saved' }.to_json
end