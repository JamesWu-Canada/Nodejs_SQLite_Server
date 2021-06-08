# Nodejs_SQLite_Server

API server. Can be used to test frontend for development.

## Technologies used

Backend: Node.js

-Sqlite3: USed sqlite3 to communicate between backend and database

Database: SQLite

-Used DB Browser for SQLite to manage database

-Used Postman for HTTP methods testing (GET, POST, PUT, DELETE)

### How to use

Open the code in VisualStudio code

Start the backend by typing "npm start" in the terminal

To use HTTP methods to communicate with the database, use a frontend application or a mock frontend like Postman

### Database specifications

The database has 2 table: "employee" and "department"

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
