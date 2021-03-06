# Nodejs_SQLite_Server

RESTful API server. Can be used to test frontend for development.

## Technologies used

Backend: Node.js

-Sqlite3: USed sqlite3 to communicate between backend and database

Database: SQLite

-Used DB Browser for SQLite to manage database

-Used Postman for HTTP methods testing (GET, POST, PUT, DELETE)

### Deployment

URL: https://james-restful.herokuapp.com/

### How to use

Open the code in VisualStudio code

npm install to install node.js modules

Start the backend by typing "npm start" in the terminal

To use HTTP methods to communicate with the database, use a frontend application or a mock frontend like Postman

### Database specifications

The database has 2 tables: "employee" and "department"

The "employee" table has fields as follows:

    "fname"	NUMERIC NOT NULL,
    "minit"	TEXT,
    "lname"	TEXT NOT NULL,
    "ssn"	TEXT NOT NULL,
    "bdate"	TEXT,
    "address"	TEXT,
    "sex"	TEXT,
    "salary"	INTEGER,
    "super_ssn"	TEXT,
    "dno"	INTEGER NOT NULL,
    FOREIGN KEY("dno") REFERENCES "department"("dnumber"),
    FOREIGN KEY("super_ssn") REFERENCES "employee"("ssn"),
    PRIMARY KEY("ssn")

The "department" table has fields as follows:

    "dname"	TEXT NOT NULL UNIQUE,
    "dnumber"	INTEGER NOT NULL,
    "mgr_ssn"	TEXT NOT NULL,
    "mgr_start"	TEXT,
    FOREIGN KEY("mgr_ssn") REFERENCES "employee"("ssn"),
    PRIMARY KEY("dnumber")

### Case 1: GET, POST, PUT and DELETE for table employee

GET Employees: "https://james-restful.herokuapp.com/employees"

POST Employee: "https://james-restful.herokuapp.com/employee"

Body example (JSON format):

{"fname": "James",
"minit" :"Q",
"lname": "Wu",
"ssn": "4358720945",
"bdate": "01-01-1999",
"address": "12 Fritz, Montreal",
"sex": "M",
"salary": 10000,
"super_ssn": "123456789",
"dno": 1}

PUT Employee: "https://james-restful.herokuapp.com/employee"

Body example (JSON format):

{"fname": "Mike",
"minit" :"Y",
"lname": "Smith",
"ssn": "4358720945",
"bdate": "01-01-1999",
"address": "12 Fritz, Montreal",
"sex": "M",
"salary": 10000,
"super_ssn": "123456789",
"dno": 1}

DELETE Employee: "https://james-restful.herokuapp.com/employee"

Body example (JSON format):

{"ssn": "4358720945"}

### Case 2: GET, POST, PUT and DELETE for table department

GET Departments: "https://james-restful.herokuapp.com/departments"

POST Department: "https://james-restful.herokuapp.com/department"

Body example (JSON format):

{"dname" :"Housing",
"dnumber":3,
"mgr_ssn":"123456789",
"mgr_start":"01/01/1999"}

PUT Department: "https://james-restful.herokuapp.com/department" or "https://james-restful.herokuapp.com/department2"

Body example (JSON format):

{"dname" :"Sports",
"dnumber":3,
"mgr_ssn":"123456789",
"mgr_start":"01/01/1999"}

DELETE Department: "https://james-restful.herokuapp.com/department"

Body example (JSON format):

{ "dnumber": 2}
