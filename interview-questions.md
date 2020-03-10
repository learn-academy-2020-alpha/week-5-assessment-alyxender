# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer:
  M - Model
  V - View
  C - Controller.
  
  This is a structure that allows you to manage your databases(models), its pages (view), and controllers (think of it as logic or commands that we can use to access our models).
  It also allows you to provide communication to your team and other developers who may also be working within your application to quickly grasp what is being and has been done to your application. 

  Researched answer:
  "This is the model-view-controller (MVC) architectural pattern, which enforces a separation between business logic from the input and presentation logic associated with a graphical user interface (GUI)."


2. What is a gem?

  Your answer:
  My understanding on the exact meaning of a gem is a bit fuzy, but from my experience on calling on gems, its a repo package manager and its a way of telling our application what set of tools and repo's we will be utilizing within our application. We can use the command 'gem gemname install' to grab specific gems from a repo list and install them to our application, (though, for it to be permenant we will need to edit the gem file and gemlock file most of the time.)

  Researched answer:
  " The software package is called a “gem” which contains a packaged Ruby application or library.

Gems can be used to extend or modify functionality in Ruby applications. Commonly they’re used to distribute reusable functionality that is shared with other Rubyists for use in their applications and libraries. Some gems provide command line utilities to help automate tasks and speed up your work."



3. Why is it important to have validations in your application?

  Your answer:
  To keep bad stuff out. No really, it will allow us to make sure that data that in entered into our application is passed through some cheap insurance that will not only make sure our data is usable and valid(thus less errors/bugs), but to also keep out nefarious use cases. 

  Researched answer:
  "Validation will ensure any data entered by the user is valid and will prevent bugs creeping in due to invalid data. It also allows us to define and implement important rules around how the business operates and how the application should reflect and respect those rules"
  



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer:
  The Person model would be a 'parent' like model. This would be defined as having many Computer (has_many).
  The Computer model would be considered a 'child' like model. This would be defined as belonging to a Person (belongs_to).
  The foreign_key would belong within the Computer model to help identify which Person owns the computer. 

  Researched answer:
  There arent really any quotes I can provide here that would be super direct. There is a lot out there I have learned about relational models but overall, I think the best place to be looking would be inside of our syllabus. 



5. What is object-relational mapping?

  Your answer:
  This is commonly referred to ORM. Object-relational mapping allows us to save time (typing things out over and over) by allowing a program to do many of our commands for us utilizing built in methods. A lot of developers tend to make their own ORM tools themselves based on specific use cases. One I've been using consistenly in rails is ActiveRecord. 

  Researched answer:
  "ORM is Object Relational Mapper. It means you don't have to manually call the database yourself; the ORM handles it for you.
  Ruby on Rails uses one called ActiveRecord, and it's a really good one.
  ORM allows you to do things such as:
  User.find(50).contacts 
  Instead of manually writing a SELECT statement with JOINs, WHEREs, etc."

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
  Representational State Transfer routes
- json
  JavaScript Object Notation
- API
  Application programming interface
- Endpoints
  An endpoint is any device that is physically an end point on a network. 
- Strong params
  Strong Parameters is a feature of Rails that prevents assigning request parameters to objects unless they have been explicitly permitted.