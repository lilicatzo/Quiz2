# Quiz 2 

Modified Routing quiz file top now contain Model,View,Controller now with appropriate structure (scaffolding). Currently have no User Interface. You will also need a myssql db named "university" with a table "student" and the following attributes: "id" (Auto Increment), "name" (VARCHAR), "address" (VARCHAR), "gender" (VARCHAR), "enrolled_date" (DATE). 

*please note that to test the functionality, API testing platforms such as Postman will need to be used.

** For convenience sake, since this is for educational purposesm the database credentials will still be available in this repo. No .gitignore here. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

1. (Optional) Install postman from the original source:
https://www.postman.com/downloads/

2. Create a database with the following query in mysql:

CREATE DATABASE IF NOT EXISTS university;

USE university;

CREATE TABLE IF NOT EXISTS students (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    address VARCHAR(150) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    enrolled_date DATE NOT NULL,
    PRIMARY KEY (id)
);

2. Git clone this repository, and install the dependencies (npm install).

3. run (npm start) to start the server.

## Usage

To access the API endpoints, do the following:

1. To create a new student, use "/create" and POST. Do not forget to fill in the body.
2. To retrive all student, use "/read" and GET.
3. To retrive a student by ID, use "/read/Id_value" and GET.
4. To update a student by ID, use "/update/Id_value" and PUT.
5. To delete a student by ID, use "delete/Id_value" and DELETE.




