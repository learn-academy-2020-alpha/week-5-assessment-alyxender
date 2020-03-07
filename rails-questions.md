# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?
2. rails new ApplicationName -d postgresql -T



2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - CRUD command to retrieve from the server
library - The View page/file
:id -The parameter identifier, which happens to be named id. 
book - Our controller identifier
show - the name of the method inside of our controller.

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

Step 1, as described by Douglas Adams- DONT PANIC.

Step 2: In your OS terminal, you'll need to run the command "rails generate migration adding_a_foreign_key"
    -this will produce a new migration file for you so you can edit the shape of your schema!
    
Step 3: Locate the newly generated migration file in your file structure and open it with a text editor of your choice. I don't recommend notepad. 

Step 4: In the block of "def change" you will need to add the following line, without quotes:
"add_column :tablename :foreign_key :integer"

Some notes before we proceed to the next step.
-The add_column is a command that will tell rails it needs to add a new column to your table.
-The ":tablename" will identify what table it needs to be accessing. You'll need to change 'tablename' to whatever you have named your table.
-The ":foreign_key" will identify the name of the column you are looking to create. Be sure to name this appropriately if it is to a relational table, it make look something like 'person_id' or 'tasklist_id'
-The ":integer" will allow the migration file to understand the data-type that this column will be receiving. This can be a string, a integer or a boolean. In this case, since we are adding a foreign key, it more than likely will be an integer. 

Step 5: Once the following line has been placed, making sure its within the block before the "end" statement, you will now need to save the file.

Step 6: Back to your OS console! You will now need to let rails know your migration file is ready to make adjustments to your schema. Do this by typing the following command (without quotes!):
    "rails db:migrate"

Step 7: Let rails work its magic. Once it has given you a success message, check your schema file to ensure your changes have taken effect. 

Step 8: Give yourself a pat on the back, you just edited your schema without having to break the golden rule of never touching the file! WOW. You truly are a rails wizard. 



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?
 - rails generate model Person shirt:string pants:string shoes:string
 - (hehehe, shoes:string... hehehehe. shoe string. heh.)



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

Step 1: You'll need to open your model file for Person and within the block of the class add the following line of code. (Without quotes!)
- "validates :shirt, :pants, :shoes presence: true"
Step 2: SAVE THE FILE!
Step 3: Give yourself another pat on the back. Wow. Look at you. Killin' it. Great work. Firm hand shake next time I see you. High fives all around. 