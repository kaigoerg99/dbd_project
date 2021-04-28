Project Name: Movie Database
Team: Kai Goerg (1 person)
Section: CS3200 33620 Database Design SEC 03 Spring 2021

Descriptions:
Project: This database represents and stores data for movies, users and theatres. It has tables for users, movies and theatres. There are also join tables to connect users and theatres, and movies and theatres. These join tables are called TheatreBooking and Showing. There is also enumeration for movie genres. The implementation of this project could be used by cinemas to keep track of its users and bookings.
User data model: This model stores data for movie watchers. It stores their name, username and password for booking system, email and date of birth.
Domain object data models: The two domain object data models are movie and theatre to represent movies and theatres. They store the title, date of release and genre of movies, and name and address of the theatre.
User to domain object relationship: The relationship between a user and theatre is a booking such as booking a seat in a theatre. Since the relationship is many to many, there is a TheatreBooking table to join the two, which stores the seat number and booking date, as well as the corresponding IDs for user and theatre.
Domain object to domain object relationship: The relationship between domain objects is between movies and theatres, represented by a showing of a movie by a theatre. As the relationship is many to many, a showing table is used to join the two objects and stores the start date of the show, end date for when they stop showing the movie, and how many times the theatre shows the movie a day.
Portable enumeration: The enumeration for this project is within the movie object. Since there are a set number of genres, we represent this as an enumeration of the strings: horror, comedy, scifi, fantasy and action.
Description of user interface requirements: For each class, a list screen and edit screen to view and edit the user, movie and theatre objects.

Project:
Problem statement: Which is the most popular movie?
Solution statement: We can use an SQL select statement to find the most popular movie. We can do this by summing the number of times it is shown per day at each theatre to total on a given day. We can sort the results of the query, and see which movie is the most popular.
User: The typical user that would use the solution is a movie go-er who wants to watch the most popular or trendy movie currently available.
Domain objects: The movie object is used in the solution to classify a certain movie. The theatre domain object represents a cinema which shows movies.