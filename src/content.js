// const Test={
//     poblemset1:{
    
//         title:"DBMS MCQ TEST",
//         prob:[
//             {question:"first problem",
//              answer:["1. first option" ,"2. second option", "3. third option", "4. forth option"],
//              curr_ans:"3. third option"
//         },
//         {question:"first problem",
//         answer:["1. first option" ,"2. second option", "3. third option", "4. forth option"],
//         curr_ans:"3. third option"
//     }
//         ]
// }
// }
// export default Test;



const Test_set= [{
  title:"DBMS MCQ TEST",
  image:"img1.jpg",
  prob:[[
    {
      question: "What is a DBMS?",
      answer: [
        "a) Data Business Management System",
        "b) Data Building Management System",
        "c) Database Management System",
        "d) Data-Based Management System",
      ],
      curr_ans: "c) Database Management System",
    },
    {
      question: "Which of the following is not a type of DBMS?",
      answer: [
        "a) Relational DBMS",
        "b) Object-Oriented DBMS",
        "c) Network DBMS",
        "d) Java DBMS",
      ],
      curr_ans: "d) Java DBMS",
    },
    {
      question: "What is a primary key in a relational database?",
      answer: [
        "a) A key used for encrypting data",
        "b) A key used to unlock the database",
        "c) A unique identifier for a record in a table",
        "d) A key used for indexing purposes",
      ],
      curr_ans: "c) A unique identifier for a record in a table",
    },
    {
      question: "Which SQL statement is used to retrieve data from a database?",
      answer: ["a) GET", "b) SELECT", "c) FETCH", "d) QUERY"],
      curr_ans: "b) SELECT",
    },
    {
      question: "Which database model uses a graph-like structure to represent data?",
      answer: ["a) Relational", "b) Hierarchical", "c) Network", "d) NoSQL"],
      curr_ans: "c) Network",
    },
    {
      question: "In a relational database, what is a foreign key?",
      answer: [
        "a) A key used for securing the database",
        "b) A key used for encryption",
        "c) A field that links to the primary key in another table",
        "d) A unique identifier for a record in a table",
      ],
      curr_ans: "c) A field that links to the primary key in another table",
    },
    {
      question: "Which SQL command is used to modify existing data in a database?",
      answer: ["a) ADD", "b) MODIFY", "c) UPDATE", "d) ALTER"],
      curr_ans: "c) UPDATE",
    },
    {
      question: "What does ACID stand for in the context of database transactions?",
      answer: [
        "a) Atomicity, Consistency, Isolation, Durability",
        "b) Abstract, Consistent, Isolated, Durable",
        "c) Atomic, Consistent, Isolated, Dynamic",
        "d) Atomicity, Continuity, Isolation, Durability",
      ],
      curr_ans: "a) Atomicity, Consistency, Isolation, Durability",
    },
    {
      question: "Which database model is document-oriented and often used for unstructured data?",
      answer: ["a) Relational", "b) Hierarchical", "c) NoSQL", "d) Object-Oriented"],
      curr_ans: "c) NoSQL",
    },
    {
      question: "Which normal form is considered the highest level of normalization?",
      answer: [
        "a) First Normal Form (1NF)",
        "b) Second Normal Form (2NF)",
        "c) Third Normal Form (3NF)",
        "d) Boyce-Codd Normal Form (BCNF)",
      ],
      curr_ans: "d) Boyce-Codd Normal Form (BCNF)",
    },
    {
      question: "Which SQL clause is used to filter rows returned by a SELECT statement?",
      answer: ["a) WHERE", "b) FILTER", "c) LIMIT", "d) SORT"],
      curr_ans: "a) WHERE",
    },
    {
      question: "What is a view in a database?",
      answer: [
        "a) A virtual table based on the result of a query",
        "b) A physical table that stores data",
        "c) A table used for temporary storage",
        "d) A backup copy of a database",
      ],
      curr_ans: "a) A virtual table based on the result of a query",
    },
    {
      question: "What is the purpose of the SQL GROUP BY clause?",
      answer: [
        "a) To sort the result set in ascending order",
        "b) To filter rows in a table",
        "c) To group rows that have the same values into summary rows",
        "d) To join two or more tables together",
      ],
      curr_ans: "c) To group rows that have the same values into summary rows",
    },
    {
      question: "Which SQL command is used to delete data from a database?",
      answer: ["a) ERASE", "b) DELETE", "c) DROP", "d) REMOVE"],
      curr_ans: "b) DELETE",
    },
    {
      question: "In a relational database, what is an index used for?",
      answer: [
        "a) To encrypt data",
        "b) To improve the speed of data retrieval",
        "c) To create foreign keys",
        "d) To store metadata",
      ],
      curr_ans: "b) To improve the speed of data retrieval",
    },
    {
      question: "What is normalization in the context of database design?",
      answer: [
        "a) A process of removing duplicate data from a database",
        "b) A process of organizing data to reduce redundancy and improve data integrity",
        "c) A process of backing up a database",
        "d) A process of converting data to a different format",
      ],
      curr_ans: "b) A process of organizing data to reduce redundancy and improve data integrity",
    },
    {
      question: "Which type of join returns only the rows that have matching values in both tables?",
      answer: ["a) INNER JOIN", "b) LEFT JOIN", "c) RIGHT JOIN", "d) FULL OUTER JOIN"],
      curr_ans: "a) INNER JOIN",
    },
    {
      question: "What is the purpose of the SQL ORDER BY clause?",
      answer: [
        "a) To filter rows in a table",
        "b) To group rows that have the same values",
        "c) To sort the result set based on one or more columns",
        "d) To join two or more tables together",
      ],
      curr_ans: "c) To sort the result set based on one or more columns",
    },
    {
      question: "Which SQL command is used to add new rows to a table?",
      answer: ["a) INSERT", "b) ADD", "c) CREATE", "d) APPEND"],
      curr_ans: "a) INSERT",
    },
    {
      question: "What is a trigger in a database?",
      answer: [
        "a) A type of stored procedure",
        "b) A way to filter data in a table",
        "c) A mechanism to enforce referential integrity",
        "d) A mechanism to automatically execute code in response to events",
      ],
      curr_ans: "d) A mechanism to automatically execute code in response to events",
    },
  ],
  [
    {
      "question": "What is the primary purpose of a DBMS (Database Management System)?",
      "answer": [
        "a) To organize files on a computer",
        "b) To manage a computer's hardware resources",
        "c) To provide an interface for users to interact with databases",
        "d) To design websites and web applications"
      ],
      "curr_ans": "c) To provide an interface for users to interact with databases"
    },
    {
      "question": "What does SQL stand for in the context of DBMS?",
      "answer": [
        "a) Structured Query Language",
        "b) Standard Query Language",
        "c) System Query Language",
        "d) Secure Query Language"
      ],
      "curr_ans": "a) Structured Query Language"
    },
    {
      "question": "Which DBMS model is known for organizing data in a tabular format with rows and columns?",
      "answer": [
        "a) Hierarchical",
        "b) Network",
        "c) Relational",
        "d) NoSQL"
      ],
      "curr_ans": "c) Relational"
    },
    {
      "question": "What is a primary key in a relational database?",
      "answer": [
        "a) A key used for encryption",
        "b) A key used for indexing files",
        "c) A unique identifier for a record in a table",
        "d) A foreign key from another table"
      ],
      "curr_ans": "c) A unique identifier for a record in a table"
    },
    {
      "question": "In a relational database, what is the purpose of a foreign key?",
      "answer": [
        "a) To provide secure access to the database",
        "b) To enforce referential integrity between tables",
        "c) To store sensitive information",
        "d) To create indexes for faster querying"
      ],
      "curr_ans": "b) To enforce referential integrity between tables"
    },
    {
      "question": "What is normalization in the context of database design?",
      "answer": [
        "a) Adding redundancy to improve data retrieval speed",
        "b) Reducing data redundancy and ensuring data integrity",
        "c) Creating indexes for faster query performance",
        "d) Converting data into a different data type"
      ],
      "curr_ans": "b) Reducing data redundancy and ensuring data integrity"
    },
    {
      "question": "Which SQL command is used to retrieve data from a database table?",
      "answer": [
        "a) UPDATE",
        "b) DELETE",
        "c) SELECT",
        "d) INSERT"
      ],
      "curr_ans": "c) SELECT"
    },
    {
      "question": "What is a stored procedure in a DBMS?",
      "answer": [
        "a) A type of database table",
        "b) A predefined set of SQL statements that can be executed as a single unit",
        "c) A way to store data temporarily in memory",
        "d) A type of primary key"
      ],
      "curr_ans": "b) A predefined set of SQL statements that can be executed as a single unit"
    },
    {
      "question": "What does ACID stand for in the context of DBMS transactions?",
      "answer": [
        "a) Atomicity, Consistency, Isolation, Durability",
        "b) Accuracy, Compatibility, Integrity, Dependability",
        "c) Analysis, Configuration, Implementation, Documentation",
        "d) All Conditions In Data"
      ],
      "curr_ans": "a) Atomicity, Consistency, Isolation, Durability"
    },
    {
      "question": "Which type of DBMS is best suited for handling unstructured and semi-structured data?",
      "answer": [
        "a) Relational DBMS",
        "b) NoSQL DBMS",
        "c) Hierarchical DBMS",
        "d) Network DBMS"
      ],
      "curr_ans": "b) NoSQL DBMS"
    },
    {
      "question": "What is the purpose of the GROUP BY clause in SQL?",
      "answer": [
        "a) To filter rows in a table",
        "b) To join two or more tables together",
        "c) To group rows that have the same values in specified columns",
        "d) To sort the result set based on one or more columns"
      ],
      "curr_ans": "c) To group rows that have the same values in specified columns"
    },
    {
      "question": "Which of the following is a disadvantage of the hierarchical DBMS model?",
      "answer": [
        "a) Difficulty in representing complex relationships",
        "b) Limited scalability",
        "c) Lack of data redundancy",
        "d) Ease of data retrieval"
      ],
      "curr_ans": "b) Limited scalability"
    },
    {
      "question": "What is the purpose of an index in a database?",
      "answer": [
        "a) To store large binary objects (BLOBs)",
        "b) To prevent unauthorized access to the database",
        "c) To provide a physical structure for data storage",
        "d) To improve the speed of data retrieval operations"
      ],
      "curr_ans": "d) To improve the speed of data retrieval operations"
    },
    {
      "question": "Which of the following is a NoSQL database?",
      "answer": [
        "a) MySQL",
        "b) Oracle",
        "c) MongoDB",
        "d) PostgreSQL"
      ],
      "curr_ans": "c) MongoDB"
    },
    {
      "question": "What is the purpose of a view in a relational database?",
      "answer": [
        "a) To physically store data on disk",
        "b) To provide a virtual table based on the result of a query",
        "c) To enforce referential integrity constraints",
        "d) To create temporary tables"
      ],
      "curr_ans": "b) To provide a virtual table based on the result of a query"
    },
    {
      "question": "Which of the following is a database object used to enforce referential integrity?",
      "answer": [
        "a) Trigger",
        "b) View",
        "c) Index",
        "d) Constraint"
      ],
      "curr_ans": "d) Constraint"
    },
    {
      "question": "In a relational database, what is a one-to-many relationship?",
      "answer": [
        "a) Each row in one table corresponds to one row in another table",
        "b) Each row in one table corresponds to multiple rows in another table",
        "c) Many rows in one table correspond to one row in another table",
        "d) Many rows in one table correspond to multiple rows in another table"
      ],
      "curr_ans": "b) Each row in one table corresponds to multiple rows in another table"
    },
    {
      "question": "Which SQL command is used to modify existing data in a database?",
      "answer": [
        "a) SELECT",
        "b) INSERT",
        "c) UPDATE",
        "d) DELETE"
      ],
      "curr_ans": "c) UPDATE"
    },
    {
      "question": "What is a database transaction?",
      "answer": [
        "a) A data structure used for indexing",
        "b) A group of related tables in a database",
        "c) A sequence of one or more SQL statements that are treated as a single unit of work",
        "d) A physical storage device for database files"
      ],
      "curr_ans": "c) A sequence of one or more SQL statements that are treated as a single unit of work"
    },
    {
      "question": "Which type of DBMS model is often used for managing hierarchical data like file systems?",
      "answer": [
        "a) Relational",
        "b) Hierarchical",
        "c) Network",
        "d) NoSQL"
      ],
      "curr_ans": "b) Hierarchical"
    },
  ],

[

  {
    "question": "What is a SQL join?",
    "answer": [
      "a) A way to insert new rows into a table",
      "b) A way to create a copy of a table",
      "c) A way to combine rows from two or more tables based on a related column",
      "d) A way to delete data from a table"
    ],
    "curr_ans": "c) A way to combine rows from two or more tables based on a related column"
  },
  {
    "question": "Which of the following is an example of a NoSQL database model?",
    "answer": [
      "a) Hierarchical",
      "b) Relational",
      "c) Document-oriented",
      "d) Network"
    ],
    "curr_ans": "c) Document-oriented"
  },
  {
    "question": "What is the purpose of the COMMIT statement in SQL?",
    "answer": [
      "a) To start a new database transaction",
      "b) To roll back a transaction",
      "c) To save the changes made in a transaction to the database",
      "d) To delete a table from the database"
    ],
    "curr_ans": "c) To save the changes made in a transaction to the database"
  },
  {
    "question": "Which type of DBMS model is known for its ability to handle large volumes of data and high scalability?",
    "answer": [
      "a) Hierarchical",
      "b) Relational",
      "c) NoSQL",
      "d) Network"
    ],
    "curr_ans": "c) NoSQL"
  },
  {
    "question": "What is the purpose of the HAVING clause in SQL?",
    "answer": [
      "a) To filter rows in a table",
      "b) To join two or more tables together",
      "c) To specify conditions for grouping rows",
      "d) To sort the result set based on one or more columns"
    ],
    "curr_ans": "c) To specify conditions for grouping rows"
  },
  {
    "question": "Which SQL command is used to add new data to a database?",
    "answer": [
      "a) SELECT",
      "b) INSERT",
      "c) UPDATE",
      "d) DELETE"
    ],
    "curr_ans": "b) INSERT"
  },
  {
    "question": "What is the purpose of a database index?",
    "answer": [
      "a) To enforce referential integrity constraints",
      "b) To create a backup copy of the database",
      "c) To provide a physical structure for data storage",
      "d) To improve the speed of data retrieval operations"
    ],
    "curr_ans": "d) To improve the speed of data retrieval operations"
  },
  {
    "question": "Which of the following is an example of a NoSQL database?",
    "answer": [
      "a) MySQL",
      "b) Oracle",
      "c) MongoDB",
      "d) PostgreSQL"
    ],
    "curr_ans": "c) MongoDB"
  },
  {
    "question": "What is the purpose of a view in a relational database?",
    "answer": [
      "a) To physically store data on disk",
      "b) To provide a virtual table based on the result of a query",
      "c) To enforce referential integrity constraints",
      "d) To create temporary tables"
    ],
    "curr_ans": "b) To provide a virtual table based on the result of a query"
  },
  {
    "question": "Which of the following is a database object used to enforce referential integrity?",
    "answer": [
      "a) Trigger",
      "b) View",
      "c) Index",
      "d) Constraint"
    ],
    "curr_ans": "d) Constraint"
  },
  {
    "question": "In a relational database, what is a one-to-many relationship?",
    "answer": [
      "a) Each row in one table corresponds to one row in another table",
      "b) Each row in one table corresponds to multiple rows in another table",
      "c) Many rows in one table correspond to one row in another table",
      "d) Many rows in one table correspond to multiple rows in another table"
    ],
    "curr_ans": "b) Each row in one table corresponds to multiple rows in another table"
  },
  {
    "question": "Which SQL command is used to modify existing data in a database?",
    "answer": [
      "a) SELECT",
      "b) INSERT",
      "c) UPDATE",
      "d) DELETE"
    ],
    "curr_ans": "c) UPDATE"
  },
{
  "question": "What is the primary purpose of a DBMS (Database Management System)?",
  "answer": [
    "a) To organize files on a computer",
    "b) To manage a computer's hardware resources",
    "c) To provide an interface for users to interact with databases",
    "d) To design websites and web applications"
  ],
  "curr_ans": "c) To provide an interface for users to interact with databases"
},
{
  "question": "What does SQL stand for in the context of DBMS?",
  "answer": [
    "a) Structured Query Language",
    "b) Standard Query Language",
    "c) System Query Language",
    "d) Secure Query Language"
  ],
  "curr_ans": "a) Structured Query Language"
},
{
  "question": "Which DBMS model is known for organizing data in a tabular format with rows and columns?",
  "answer": [
    "a) Hierarchical",
    "b) Network",
    "c) Relational",
    "d) NoSQL"
  ],
  "curr_ans": "c) Relational"
},
{
  "question": "What is a primary key in a relational database?",
  "answer": [
    "a) A key used for encryption",
    "b) A key used for indexing files",
    "c) A unique identifier for a record in a table",
    "d) A foreign key from another table"
  ],
  "curr_ans": "c) A unique identifier for a record in a table"
},
{
  "question": "In a relational database, what is the purpose of a foreign key?",
  "answer": [
    "a) To provide secure access to the database",
    "b) To enforce referential integrity between tables",
    "c) To store sensitive information",
    "d) To create indexes for faster querying"
  ],
  "curr_ans": "b) To enforce referential integrity between tables"
}



],

[
  {   "question": "What is normalization in the context of database design?",
  "answer": [
    "a) Adding redundancy to improve data retrieval speed",
    "b) Reducing data redundancy and ensuring data integrity",
    "c) Creating indexes for faster query performance",
    "d) Converting data into a different data type"
  ],
  "curr_ans": "b) Reducing data redundancy and ensuring data integrity"
},
{
  "question": "Which SQL command is used to retrieve data from a database table?",
  "answer": [
    "a) UPDATE",
    "b) DELETE",
    "c) SELECT",
    "d) INSERT"
  ],
  "curr_ans": "c) SELECT"
},
{
  "question": "What is a stored procedure in a DBMS?",
  "answer": [
    "a) A type of database table",
    "b) A predefined set of SQL statements that can be executed as a single unit",
    "c) A way to store data temporarily in memory",
    "d) A type of primary key"
  ],
  "curr_ans": "b) A predefined set of SQL statements that can be executed as a single unit"
},
{
  "question": "What does ACID stand for in the context of DBMS transactions?",
  "answer": [
    "a) Atomicity, Consistency, Isolation, Durability",
    "b) Accuracy, Compatibility, Integrity, Dependability",
    "c) Analysis, Configuration, Implementation, Documentation",
    "d) All Conditions In Data"
  ],
  "curr_ans": "a) Atomicity, Consistency, Isolation, Durability"
},
{
  "question": "Which type of DBMS is best suited for handling unstructured and semi-structured data?",
  "answer": [
    "a) Relational DBMS",
    "b) NoSQL DBMS",
    "c) Hierarchical DBMS",
    "d) Network DBMS"
  ],
  "curr_ans": "b) NoSQL DBMS"
},
{
  "question": "What is the purpose of the GROUP BY clause in SQL?",
  "answer": [
    "a) To filter rows in a table",
    "b) To join two or more tables together",
    "c) To group rows that have the same values in specified columns",
    "d) To sort the result set based on one or more columns"
  ],
  "curr_ans": "c) To group rows that have the same values in specified columns"
},
{
  "question": "Which of the following is a disadvantage of the hierarchical DBMS model?",
  "answer": [
    "a) Difficulty in representing complex relationships",
    "b) Limited scalability",
    "c) Lack of data redundancy",
    "d) Ease of data retrieval"
  ],
  "curr_ans": "b) Limited scalability"
},
{
  "question": "What is the purpose of an index in a database?",
  "answer": [
    "a) To store large binary objects (BLOBs)",
    "b) To prevent unauthorized access to the database",
    "c) To provide a physical structure for data storage",
    "d) To improve the speed of data retrieval operations"
  ],
  "curr_ans": "d) To improve the speed of data retrieval operations"
},
{
  "question": "Which of the following is a NoSQL database?",
  "answer": [
    "a) MySQL",
    "b) Oracle",
    "c) MongoDB",
    "d) PostgreSQL"
  ],
  "curr_ans": "c) MongoDB"
},
{
  "question": "What is the purpose of a view in a relational database?",
  "answer": [
    "a) To physically store data on disk",
    "b) To provide a virtual table based on the result of a query",
    "c) To enforce referential integrity constraints",
    "d) To create temporary tables"
  ],
  "curr_ans": "b) To provide a virtual table based on the result of a query"
},
{
  "question": "Which of the following is a database object used to enforce referential integrity?",
  "answer": [
    "a) Trigger",
    "b) View",
    "c) Index",
    "d) Constraint"
  ],
  "curr_ans": "d) Constraint"
},
{
  "question": "In a relational database, what is a one-to-many relationship?",
  "answer": [
    "a) Each row in one table corresponds to one row in another table",
    "b) Each row in one table corresponds to multiple rows in another table",
    "c) Many rows in one table correspond to one row in another table",
    "d) Many rows in one table correspond to multiple rows in another table"
  ],
  "curr_ans": "b) Each row in one table corresponds to multiple rows in another table"
},
{
  "question": "Which SQL command is used to modify existing data in a database?",
  "answer": [
    "a) SELECT",
    "b) INSERT",
    "c) UPDATE",
    "d) DELETE"
  ],
  "curr_ans": "c) UPDATE"
},
{
  "question": "What is a database transaction?",
  "answer": [
    "a) A data structure used for indexing",
    "b) A group of related tables in a database",
    "c) A sequence of one or more SQL statements that are treated as a single unit of work",
    "d) A physical storage device for database files"
  ],
  "curr_ans": "c) A sequence of one or more SQL statements that are treated as a single unit of work"
},
{
  "question": "Which type of DBMS model is often used for managing hierarchical data like file systems?",
  "answer": [
    "a) Relational",
    "b) Hierarchical",
    "c) Network",
    "d) NoSQL"
  ],
  "curr_ans": "b) Hierarchical"
},
{
  "question": "What is a SQL join?",
  "answer": [
    "a) A way to insert new rows into a table",
    "b) A way to create a copy of a table",
    "c) A way to combine rows from two or more tables based on a related column",
    "d) A way to delete data from a table"
  ],
  "curr_ans": "c) A way to combine rows from two or more tables based on a related column"
},
{
  "question": "Which of the following is an example of a NoSQL database model?",
  "answer": [
    "a) Hierarchical",
    "b) Relational",
    "c) Document-oriented",
    "d) Network"
  ],
  "curr_ans": "c) Document-oriented"
},
{
  "question": "What is the purpose of the COMMIT statement in SQL?",
  "answer": [
    "a) To start a new database transaction",
    "b) To roll back a transaction",
    "c) To save the changes made in a transaction to the database",
    "d) To delete a table from the database"
  ],
  "curr_ans": "c) To save the changes made in a transaction to the database"
},
{
  "question": "Which type of DBMS model is known for its ability to handle large volumes of data and high scalability?",
  "answer": [
    "a) Hierarchical",
    "b) Relational",
    "c) NoSQL",
    "d) Network"
  ],
  "curr_ans": "c) NoSQL"
},
{
  "question": "What is the purpose of the HAVING clause in SQL?",
  "answer": [
    "a) To filter rows in a table",
    "b) To join two or more tables together",
    "c) To specify conditions for grouping rows",
    "d) To sort the result set based on one or more columns"
  ],
  "curr_ans": "c) To specify conditions for grouping rows"
}
],


[
  {
    "question": "Which SQL command is used to add new data to a database?",
    "answer": [
      "a) SELECT",
      "b) INSERT",
      "c) UPDATE",
      "d) DELETE"
    ],
    "curr_ans": "b) INSERT"
  },
  {
    "question": "What is the purpose of a database index?",
    "answer": [
      "a) To enforce referential integrity constraints",
      "b) To create a backup copy of the database",
      "c) To provide a physical structure for data storage",
      "d) To improve the speed of data retrieval operations"
    ],
    "curr_ans": "d) To improve the speed of data retrieval operations"
  },
  {
    "question": "Which of the following is an example of a NoSQL database?",
    "answer": [
      "a) MySQL",
      "b) Oracle",
      "c) MongoDB",
      "d) PostgreSQL"
    ],
    "curr_ans": "c) MongoDB"
  },
  {
    "question": "What is the purpose of a view in a relational database?",
    "answer": [
      "a) To physically store data on disk",
      "b) To provide a virtual table based on the result of a query",
      "c) To enforce referential integrity constraints",
      "d) To create temporary tables"
    ],
    "curr_ans": "b) To provide a virtual table based on the result of a query"
  },
  {
    "question": "Which of the following is a database object used to enforce referential integrity?",
    "answer": [
      "a) Trigger",
      "b) View",
      "c) Index",
      "d) Constraint"
    ],
    "curr_ans": "d) Constraint"
  },
  {
    "question": "In a relational database, what is a one-to-many relationship?",
    "answer": [
      "a) Each row in one table corresponds to one row in another table",
      "b) Each row in one table corresponds to multiple rows in another table",
      "c) Many rows in one table correspond to one row in another table",
      "d) Many rows in one table correspond to multiple rows in another table"
    ],
    "curr_ans": "b) Each row in one table corresponds to multiple rows in another table"
  },
  {
    "question": "Which SQL command is used to modify existing data in a database?",
    "answer": [
      "a) SELECT",
      "b) INSERT",
      "c) UPDATE",
      "d) DELETE"
    ],
    "curr_ans": "c) UPDATE"
  },

  {
    "question": "What is a database transaction?",
    "answer": [
      "a) A data structure used for indexing",
      "b) A group of related tables in a database",
      "c) A sequence of one or more SQL statements that are treated as a single unit of work",
      "d) A physical storage device for database files"
    ],
    "curr_ans": "c) A sequence of one or more SQL statements that are treated as a single unit of work"
  },
  {
    "question": "Which type of DBMS model is often used for managing hierarchical data like file systems?",
    "answer": [
      "a) Relational",
      "b) Hierarchical",
      "c) Network",
      "d) NoSQL"
    ],
    "curr_ans": "b) Hierarchical"
  },
  {
    "question": "What is a SQL join?",
    "answer": [
      "a) A way to insert new rows into a table",
      "b) A way to create a copy of a table",
      "c) A way to combine rows from two or more tables based on a related column",
      "d) A way to delete data from a table"
    ],
    "curr_ans": "c) A way to combine rows from two or more tables based on a related column"
  },
  {
    "question": "Which of the following is an example of a NoSQL database model?",
    "answer": [
      "a) Hierarchical",
      "b) Relational",
      "c) Document-oriented",
      "d) Network"
    ],
    "curr_ans": "c) Document-oriented"
  },
  {
    "question": "What is the purpose of the COMMIT statement in SQL?",
    "answer": [
      "a) To start a new database transaction",
      "b) To roll back a transaction",
      "c) To save the changes made in a transaction to the database",
      "d) To delete a table from the database"
    ],
    "curr_ans": "c) To save the changes made in a transaction to the database"
  },
  {
    "question": "Which type of DBMS model is known for its ability to handle large volumes of data and high scalability?",
    "answer": [
      "a) Hierarchical",
      "b) Relational",
      "c) NoSQL",
      "d) Network"
    ],
    "curr_ans": "c) NoSQL"
  },
  {
    "question": "What is the purpose of the HAVING clause in SQL?",
    "answer": [
      "a) To filter rows in a table",
      "b) To join two or more tables together",
      "c) To specify conditions for grouping rows",
      "d) To sort the result set based on one or more columns"
    ],
    "curr_ans": "c) To specify conditions for grouping rows"
  },
  {
    "question": "Which SQL command is used to add new data to a database?",
    "answer": [
      "a) SELECT",
      "b) INSERT",
      "c) UPDATE",
      "d) DELETE"
    ],
    "curr_ans": "b) INSERT"
  },
  {
    "question": "What is the purpose of a database index?",
    "answer": [
      "a) To enforce referential integrity constraints",
      "b) To create a backup copy of the database",
      "c) To provide a physical structure for data storage",
      "d) To improve the speed of data retrieval operations"
    ],
    "curr_ans": "d) To improve the speed of data retrieval operations"
  },
  {
    "question": "Which of the following is an example of a NoSQL database?",
    "answer": [
      "a) MySQL",
      "b) Oracle",
      "c) MongoDB",
      "d) PostgreSQL"
    ],
    "curr_ans": "c) MongoDB"
  },
  {
    "question": "What is the purpose of a view in a relational database?",
    "answer": [
      "a) To physically store data on disk",
      "b) To provide a virtual table based on the result of a query",
      "c) To enforce referential integrity constraints",
      "d) To create temporary tables"
    ],
    "curr_ans": "b) To provide a virtual table based on the result of a query"
  },
  {
    "question": "Which of the following is a database object used to enforce referential integrity?",
    "answer": [
      "a) Trigger",
      "b) View",
      "c) Index",
      "d) Constraint"
    ],
    "curr_ans": "d) Constraint"
  },
  {
    "question": "In a relational database, what is a one-to-many relationship?",
    "answer": [
      "a) Each row in one table corresponds to one row in another table",
      "b) Each row in one table corresponds to multiple rows in another table",
      "c) Many rows in one table correspond to one row in another table",
      "d) Many rows in one table correspond to multiple rows in another table"
    ],
    "curr_ans": "b) Each row in one table corresponds to multiple rows in another table"
  }
],

[
  

  {
    "question": "Which SQL command is used to modify existing data in a database?",
    "answer": [
      "a) SELECT",
      "b) INSERT",
      "c) UPDATE",
      "d) DELETE"
    ],
    "curr_ans": "c) UPDATE"
  },
  {
    "question": "What is a database transaction?",
    "answer": [
      "a) A data structure used for indexing",
      "b) A group of related tables in a database",
      "c) A sequence of one or more SQL statements that are treated as a single unit of work",
      "d) A physical storage device for database files"
    ],
    "curr_ans": "c) A sequence of one or more SQL statements that are treated as a single unit of work"
  },
  {
    "question": "Which type of DBMS model is often used for managing hierarchical data like file systems?",
    "answer": [
      "a) Relational",
      "b) Hierarchical",
      "c) Network",
      "d) NoSQL"
    ],
    "curr_ans": "b) Hierarchical"
  },
  {
    "question": "What is a SQL join?",
    "answer": [
      "a) A way to insert new rows into a table",
      "b) A way to create a copy of a table",
      "c) A way to combine rows from two or more tables based on a related column",
      "d) A way to delete data from a table"
    ],
    "curr_ans": "c) A way to combine rows from two or more tables based on a related column"
  },
  {
    "question": "Which of the following is an example of a NoSQL database model?",
    "answer": [
      "a) Hierarchical",
      "b) Relational",
      "c) Document-oriented",
      "d) Network"
    ],
    "curr_ans": "c) Document-oriented"
  },
  {
    "question": "What is the purpose of the COMMIT statement in SQL?",
    "answer": [
      "a) To start a new database transaction",
      "b) To roll back a transaction",
      "c) To save the changes made in a transaction to the database",
      "d) To delete a table from the database"
    ],
    "curr_ans": "c) To save the changes made in a transaction to the database"
  },
  {
    "question": "Which type of DBMS model is known for its ability to handle large volumes of data and high scalability?",
    "answer": [
      "a) Hierarchical",
      "b) Relational",
      "c) NoSQL",
      "d) Network"
    ],
    "curr_ans": "c) NoSQL"
  },
  {
    "question": "What is the purpose of the HAVING clause in SQL?",
    "answer": [
      "a) To filter rows in a table",
      "b) To join two or more tables together",
      "c) To specify conditions for grouping rows",
      "d) To sort the result set based on one or more columns"
    ],
    "curr_ans": "c) To specify conditions for grouping rows"
  },
  {
    "question": "Which SQL command is used to add new data to a database?",
    "answer": [
      "a) SELECT",
      "b) INSERT",
      "c) UPDATE",
      "d) DELETE"
    ],
    "curr_ans": "b) INSERT"
  },
  {
    "question": "What is the purpose of a database index?",
    "answer": [
      "a) To enforce referential integrity constraints",
      "b) To create a backup copy of the database",
      "c) To provide a physical structure for data storage",
      "d) To improve the speed of data retrieval operations"
    ],
    "curr_ans": "d) To improve the speed of data retrieval operations"
  },
  {
    "question": "Which of the following is an example of a NoSQL database?",
    "answer": [
      "a) MySQL",
      "b) Oracle",
      "c) MongoDB",
      "d) PostgreSQL"
    ],
    "curr_ans": "c) MongoDB"
  },
  {
    "question": "What is the purpose of a view in a relational database?",
    "answer": [
      "a) To physically store data on disk",
      "b) To provide a virtual table based on the result of a query",
      "c) To enforce referential integrity constraints",
      "d) To create temporary tables"
    ],
    "curr_ans": "b) To provide a virtual table based on the result of a query"
  },
  {
    "question": "Which of the following is a database object used to enforce referential integrity?",
    "answer": [
      "a) Trigger",
      "b) View",
      "c) Index",
      "d) Constraint"
    ],
    "curr_ans": "d) Constraint"
  },
  {
    "question": "In a relational database, what is a one-to-many relationship?",
    "answer": [
      "a) Each row in one table corresponds to one row in another table",
      "b) Each row in one table corresponds to multiple rows in another table",
      "c) Many rows in one table correspond to one row in another table",
      "d) Many rows in one table correspond to multiple rows in another table"
    ],
    "curr_ans": "b) Each row in one table corresponds to multiple rows in another table"
  },
  {
    "question": "Which SQL command is used to modify existing data in a database?",
    "answer": [
      "a) SELECT",
      "b) INSERT",
      "c) UPDATE",
      "d) DELETE"
    ],
    "curr_ans": "c) UPDATE"
  },
  {
    "question": "What is a database transaction?",
    "answer": [
      "a) A data structure used for indexing",
      "b) A group of related tables in a database",
      "c) A sequence of one or more SQL statements that are treated as a single unit of work",
      "d) A physical storage device for database files"
    ],
    "curr_ans": "c) A sequence of one or more SQL statements that are treated as a single unit of work"
  },
  {
    "question": "Which type of DBMS model is often used for managing hierarchical data like file systems?",
    "answer": [
      "a) Relational",
      "b) Hierarchical",
      "c) Network",
      "d) NoSQL"
    ],
    "curr_ans": "b) Hierarchical"
  },
  {
    "question": "What is a SQL join?",
    "answer": [
      "a) A way to insert new rows into a table",
      "b) A way to create a copy of a table",
      "c) A way to combine rows from two or more tables based on a related column",
      "d) A way to delete data from a table"
    ],
    "curr_ans": "c) A way to combine rows from two or more tables based on a related column"
  },
  {
    "question": "Which of the following is an example of a NoSQL database model?",
    "answer": [
      "a) Hierarchical",
      "b) Relational",
      "c) Document-oriented",
      "d) Network"
    ],
    "curr_ans": "c) Document-oriented"
  },
  {
    "question": "What is the purpose of the COMMIT statement in SQL?",
    "answer": [
      "a) To start a new database transaction",
      "b) To roll back a transaction",
      "c) To save the changes made in a transaction to the database",
      "d) To delete a table from the database"
    ],
    "curr_ans": "c) To save the changes made in a transaction to the database"
  }


]]

},
{
  title:"OPERATING SYSTEM MCQ TEST",
  image:"img1",
  prob:[[
    {
      "question": "What is the primary function of an operating system?",
      "answer": [
        "a) To manage hardware resources",
        "b) To provide a user interface",
        "c) To create documents and files",
        "d) To browse the internet"
      ],
      "curr_ans": "a) To manage hardware resources"
    },
    {
      "question": "Which component of an operating system is responsible for managing memory?",
      "answer": [
        "a) Kernel",
        "b) Shell",
        "c) File system",
        "d) Device driver"
      ],
      "curr_ans": "a) Kernel"
    },
    {
      "question": "What is the purpose of the CPU scheduler in an operating system?",
      "answer": [
        "a) To manage disk drives",
        "b) To allocate CPU time to processes",
        "c) To manage printers",
        "d) To organize files and folders"
      ],
      "curr_ans": "b) To allocate CPU time to processes"
    },
    {
      "question": "Which memory management scheme allows for the execution of a process before it is completely loaded into memory?",
      "answer": [
        "a) Paging",
        "b) Swapping",
        "c) Demand paging",
        "d) Fragmentation"
      ],
      "curr_ans": "c) Demand paging"
    },
    {
      "question": "What is the primary purpose of the file system in an operating system?",
      "answer": [
        "a) To manage network connections",
        "b) To store and organize files and directories",
        "c) To control user access to the computer",
        "d) To schedule tasks and processes"
      ],
      "curr_ans": "b) To store and organize files and directories"
    },
    {
      "question": "Which type of operating system allows multiple users to run programs at the same time and provides time-sharing capabilities?",
      "answer": [
        "a) Single-user operating system",
        "b) Multi-user operating system",
        "c) Real-time operating system",
        "d) Batch operating system"
      ],
      "curr_ans": "b) Multi-user operating system"
    },
    {
      "question": "What is the role of a device driver in an operating system?",
      "answer": [
        "a) To manage memory",
        "b) To provide a user interface",
        "c) To facilitate communication with hardware devices",
        "d) To execute user programs"
      ],
      "curr_ans": "c) To facilitate communication with hardware devices"
    },
    {
      "question": "What is the purpose of the command interpreter or shell in an operating system?",
      "answer": [
        "a) To manage CPU scheduling",
        "b) To provide a graphical user interface",
        "c) To execute user commands and run programs",
        "d) To control access to the computer"
      ],
      "curr_ans": "c) To execute user commands and run programs"
    },
    {
      "question": "Which mechanism in an operating system protects one process from interfering with the memory of another process?",
      "answer": [
        "a) Memory mapping",
        "b) Virtual memory",
        "c) Process isolation",
        "d) Paging"
      ],
      "curr_ans": "c) Process isolation"
    },
    {
      "question": "What is a context switch in the context of operating systems?",
      "answer": [
        "a) A switch between different users on the same computer",
        "b) A switch between different processes or threads in the CPU",
        "c) A switch from one operating system to another",
        "d) A switch between virtual memory and physical memory"
      ],
      "curr_ans": "b) A switch between different processes or threads in the CPU"
    },
    {
      "question": "In which memory hierarchy level does the CPU directly access data and instructions?",
      "answer": [
        "a) Secondary storage",
        "b) Cache memory",
        "c) Main memory",
        "d) Virtual memory"
      ],
      "curr_ans": "b) Cache memory"
    },
    {
      "question": "What is the purpose of an interrupt in an operating system?",
      "answer": [
        "a) To terminate a program",
        "b) To provide input to the CPU",
        "c) To temporarily suspend the execution of a program and handle a specific event or request",
        "d) To initiate a system shutdown"
      ],
      "curr_ans": "c) To temporarily suspend the execution of a program and handle a specific event or request"
    },
    {
      "question": "Which scheduling algorithm in an operating system gives priority to the process with the highest CPU burst time?",
      "answer": [
        "a) Round Robin",
        "b) Shortest Job First (SJF)",
        "c) First-Come, First-Served (FCFS)",
        "d) Priority Scheduling"
      ],
      "curr_ans": "d) Priority Scheduling"
    },
    {
      "question": "What is the role of the spooler in an operating system?",
      "answer": [
        "a) To manage user accounts and permissions",
        "b) To provide a command-line interface",
        "c) To manage print jobs in a queue",
        "d) To control network connections"
      ],
      "curr_ans": "c) To manage print jobs in a queue"
    },
    {
      "question": "Which type of operating system is designed for embedded systems and real-time applications?",
      "answer": [
        "a) Windows",
        "b) Linux",
        "c) Real-time operating system (RTOS)",
        "d) macOS"
      ],
      "curr_ans": "c) Real-time operating system (RTOS)"
    },
    {
      "question": "What is the purpose of a semaphore in operating system synchronization?",
      "answer": [
        "a) To schedule processes",
        "b) To manage memory",
        "c) To prevent deadlocks",
        "d) To control access to shared resources"
      ],
      "curr_ans": "d) To control access to shared resources"
    },
    {
      "question": "Which component of an operating system manages user accounts, passwords, and permissions?",
      "answer": [
        "a) Kernel",
        "b) File system",
        "c) Command interpreter",
        "d) Security subsystem"
      ],
      "curr_ans": "d) Security subsystem"
    },
    {
      "question": "What is a deadlock in the context of operating system scheduling?",
      "answer": [
        "a) A situation where a process is terminated unexpectedly",
        "b) A situation where a process is waiting for a resource indefinitely and cannot proceed",
        "c) A situation where a process is consuming excessive CPU time",
        "d) A situation where two processes are in a race condition"
      ],
      "curr_ans": "b) A situation where a process is waiting for a resource indefinitely and cannot proceed"
    },
    {
      "question": "Which of the following is not a type of operating system?",
      "answer": [
        "a) UNIX",
        "b) iOS",
        "c) Apache",
        "d) Android"
      ],
      "curr_ans": "c) Apache"
    },
    {
      "question": "What is a semaphore in the context of operating system synchronization?",
      "answer": [
        "a) A device driver",
        "b) A hardware interrupt",
        "c) A synchronization mechanism for controlling access to shared resources",
        "d) A type of CPU"
      ],
      "curr_ans": "c) A synchronization mechanism for controlling access to shared resources"
    }
  ],
  [
    {
      "question": "What is the purpose of a system call in an operating system?",
      "answer": [
        "a) To execute user programs",
        "b) To manage hardware resources",
        "c) To manage user accounts",
        "d) To display messages to the user"
      ],
      "curr_ans": "b) To manage hardware resources"
    },
    {
      "question": "Which component of an operating system is responsible for managing input and output operations?",
      "answer": [
        "a) Scheduler",
        "b) Device driver",
        "c) File system",
        "d) Command interpreter"
      ],
      "curr_ans": "b) Device driver"
    },
    {
      "question": "What is a process in the context of operating systems?",
      "answer": [
        "a) A program that is currently running",
        "b) A user account",
        "c) A type of CPU",
        "d) A file on the hard drive"
      ],
      "curr_ans": "a) A program that is currently running"
    },
    {
      "question": "Which memory management scheme uses fixed-size partitions for allocating memory to processes?",
      "answer": [
        "a) Paging",
        "b) Segmentation",
        "c) Contiguous memory allocation",
        "d) Demand paging"
      ],
      "curr_ans": "c) Contiguous memory allocation"
    },
    {
      "question": "What is the role of the shell in an operating system?",
      "answer": [
        "a) To manage device drivers",
        "b) To allocate CPU time to processes",
        "c) To provide a command-line interface for user interaction",
        "d) To manage memory"
      ],
      "curr_ans": "c) To provide a command-line interface for user interaction"
    },
    {
      "question": "Which type of operating system is optimized for gaming and multimedia applications?",
      "answer": [
        "a) Real-time operating system (RTOS)",
        "b) Mobile operating system",
        "c) Multimedia operating system",
        "d) Network operating system"
      ],
      "curr_ans": "c) Multimedia operating system"
    },
    {
      "question": "What is the purpose of a bootloader in an operating system?",
      "answer": [
        "a) To load the operating system into memory at startup",
        "b) To manage user accounts",
        "c) To schedule tasks and processes",
        "d) To control hardware devices"
      ],
      "curr_ans": "a) To load the operating system into memory at startup"
    },
    {
      "question": "Which memory management scheme allows processes to be loaded into any available memory partition?",
      "answer": [
        "a) Paging",
        "b) Contiguous memory allocation",
        "c) Segmentation",
        "d) Swapping"
      ],
      "curr_ans": "a) Paging"
    },
    {
      "question": "In a multi-programming operating system, what is the purpose of the job scheduler?",
      "answer": [
        "a) To allocate CPU time to processes",
        "b) To manage input and output operations",
        "c) To manage device drivers",
        "d) To load the operating system into memory"
      ],
      "curr_ans": "a) To allocate CPU time to processes"
    },
    {
      "question": "What is virtual memory in the context of operating systems?",
      "answer": [
        "a) A type of cache memory",
        "b) Memory allocated to virtual machines",
        "c) A memory management technique that uses a combination of physical and disk-based memory",
        "d) Memory allocated to device drivers"
      ],
      "curr_ans": "c) A memory management technique that uses a combination of physical and disk-based memory"
    },
    {
      "question": "What is the purpose of a page table in virtual memory management?",
      "answer": [
        "a) To manage device drivers",
        "b) To allocate CPU time to processes",
        "c) To map virtual addresses to physical addresses",
        "d) To manage user accounts"
      ],
      "curr_ans": "c) To map virtual addresses to physical addresses"
    },
    {
      "question": "Which scheduling algorithm in an operating system gives equal priority to all processes in the ready queue?",
      "answer": [
        "a) Round Robin",
        "b) Shortest Job First (SJF)",
        "c) Priority Scheduling",
        "d) First-Come, First-Served (FCFS)"
      ],
      "curr_ans": "d) First-Come, First-Served (FCFS)"
    },
    {
      "question": "What is the role of a deadlock detection algorithm in operating system resource allocation?",
      "answer": [
        "a) To prevent deadlocks from occurring",
        "b) To terminate processes in a deadlock",
        "c) To detect and recover from deadlocks",
        "d) To allocate resources to processes"
      ],
      "curr_ans": "c) To detect and recover from deadlocks"
    },
    {
      "question": "In an operating system, what is a page fault?",
      "answer": [
        "a) A memory protection error",
        "b) A situation where a process is terminated unexpectedly",
        "c) A situation where a process is waiting for a resource indefinitely",
        "d) A situation where a required page is not in memory and must be loaded from disk"
      ],
      "curr_ans": "d) A situation where a required page is not in memory and must be loaded from disk"
    },
    {
      "question": "Which operating system component is responsible for managing user accounts, passwords, and permissions?",
      "answer": [
        "a) Kernel",
        "b) File system",
        "c) Security subsystem",
        "d) Device driver"
      ],
      "curr_ans": "c) Security subsystem"
    },
    {
      "question": "What is the purpose of a system log in an operating system?",
      "answer": [
        "a) To store user files and documents",
        "b) To record events and errors for system troubleshooting",
        "c) To manage CPU scheduling",
        "d) To provide a command-line interface"
      ],
      "curr_ans": "b) To record events and errors for system troubleshooting"
    },
    {
      "question": "Which operating system architecture is used in smartphones and tablets?",
      "answer": [
        "a) x86",
        "b) ARM",
        "c) PowerPC",
        "d) MIPS"
      ],
      "curr_ans": "b) ARM"
    },
    {
      "question": "What is the purpose of a system call handler in an operating system?",
      "answer": [
        "a) To load the operating system into memory",
        "b) To execute user programs",
        "c) To provide a command-line interface",
        "d) To facilitate communication between user programs and the kernel"
      ],
      "curr_ans": "d) To facilitate communication between user programs and the kernel"
    },
    {
      "question": "Which type of operating system is designed for high-performance scientific computing?",
      "answer": [
        "a) Real-time operating system (RTOS)",
        "b) Batch operating system",
        "c) Supercomputer operating system",
        "d) Embedded operating system"
      ],
      "curr_ans": "c) Supercomputer operating system"
    }
  ],
  [
    {
      "question": "What is the purpose of the 'fork()' system call in Unix-like operating systems?",
      "answer": [
        "a) To create a new file",
        "b) To execute a program",
        "c) To create a new process",
        "d) To delete a file"
      ],
      "curr_ans": "c) To create a new process"
    },
    {
      "question": "In the context of process scheduling, what is the 'burst time' of a process?",
      "answer": [
        "a) The time taken by a process to execute",
        "b) The time a process spends in the ready queue",
        "c) The time a process waits for I/O operations",
        "d) The time a process spends in the terminated state"
      ],
      "curr_ans": "a) The time taken by a process to execute"
    },
    {
      "question": "Which scheduling algorithm in an operating system gives each process a fixed time slice or quantum of CPU time?",
      "answer": [
        "a) Round Robin",
        "b) Shortest Job First (SJF)",
        "c) Priority Scheduling",
        "d) First-Come, First-Served (FCFS)"
      ],
      "curr_ans": "a) Round Robin"
    },
    {
      "question": "What is a 'thread' in the context of multi-threading in operating systems?",
      "answer": [
        "a) A separate process with its own memory space",
        "b) A single unit of a process that can be scheduled independently",
        "c) A process that is terminated",
        "d) A process that is waiting for user input"
      ],
      "curr_ans": "b) A single unit of a process that can be scheduled independently"
    },
    {
      "question": "What is the purpose of a 'mutex' in multi-threaded programming?",
      "answer": [
        "a) To terminate a thread",
        "b) To provide a barrier for threads",
        "c) To protect shared resources from simultaneous access by multiple threads",
        "d) To allocate memory for threads"
      ],
      "curr_ans": "c) To protect shared resources from simultaneous access by multiple threads"
    },
    {
      "question": "What is the role of the 'shell' in the Unix operating system?",
      "answer": [
        "a) To manage hardware resources",
        "b) To allocate CPU time to processes",
        "c) To provide a command-line interface for user interaction",
        "d) To manage memory"
      ],
      "curr_ans": "c) To provide a command-line interface for user interaction"
    },
    {
      "question": "What is 'paging' in memory management?",
      "answer": [
        "a) A mechanism to manage input and output operations",
        "b) A method of dividing physical memory into fixed-sized blocks",
        "c) A technique to divide a process into multiple threads",
        "d) A way to allocate memory for files"
      ],
      "curr_ans": "b) A method of dividing physical memory into fixed-sized blocks"
    },
    {
      "question": "In an operating system, what is the purpose of the 'swap space'?",
      "answer": [
        "a) To store temporary files",
        "b) To swap processes in and out of main memory",
        "c) To manage user accounts",
        "d) To store system log files"
      ],
      "curr_ans": "b) To swap processes in and out of main memory"
    },
    {
      "question": "What is 'thrashing' in the context of memory management?",
      "answer": [
        "a) A process that is stuck in a loop",
        "b) A process that is consuming excessive CPU time",
        "c) A situation where the operating system spends more time swapping processes in and out of memory than executing them",
        "d) A process that is waiting for user input"
      ],
      "curr_ans": "c) A situation where the operating system spends more time swapping processes in and out of memory than executing them"
    },
    {
      "question": "What is the primary goal of 'virtual memory' in an operating system?",
      "answer": [
        "a) To provide additional physical RAM",
        "b) To provide memory protection for processes",
        "c) To eliminate the need for secondary storage",
        "d) To allow processes to use more memory than physically available"
      ],
      "curr_ans": "d) To allow processes to use more memory than physically available"
    },
    {
      "question": "In a multi-core processor, what is 'parallelism'?",
      "answer": [
        "a) The ability to run multiple operating systems simultaneously",
        "b) The ability to execute multiple threads or processes at the same time on different cores",
        "c) The ability to run virtual machines on a single core",
        "d) The ability to switch between cores dynamically"
      ],
      "curr_ans": "b) The ability to execute multiple threads or processes at the same time on different cores"
    },
    {
      "question": "What is the purpose of the 'command interpreter' in an operating system?",
      "answer": [
        "a) To allocate CPU time to processes",
        "b) To manage device drivers",
        "c) To execute user commands and run programs",
        "d) To control access to the computer"
      ],
      "curr_ans": "c) To execute user commands and run programs"
    },
    {
      "question": "Which component of an operating system is responsible for managing file operations like create, read, write, and delete?",
      "answer": [
        "a) Scheduler",
        "b) Device driver",
        "c) File system",
        "d) Kernel"
      ],
      "curr_ans": "c) File system"
    },
    {
      "question": "What is the purpose of the 'critical section' in multi-threaded programming?",
      "answer": [
        "a) To execute high-priority threads",
        "b) To allocate memory for threads",
        "c) To provide a barrier for threads",
        "d) To protect shared resources from simultaneous access by multiple threads"
      ],
      "curr_ans": "d) To protect shared resources from simultaneous access by multiple threads"
    },
    {
      "question": "In the context of process synchronization, what is 'deadlock'?",
      "answer": [
        "a) A situation where a process is terminated unexpectedly",
        "b) A situation where a process is waiting for user input",
        "c) A situation where two or more processes are unable to proceed because each is waiting for a resource held by the other",
        "d) A situation where a process is consuming excessive CPU time"
      ],
      "curr_ans": "c) A situation where two or more processes are unable to proceed because each is waiting for a resource held by the other"
    },
    {
      "question": "What is 'process synchronization' in operating systems?",
      "answer": [
        "a) The process of scheduling CPU time for processes",
        "b) The process of swapping processes in and out of main memory",
        "c) The process of ensuring that multiple processes or threads cooperate and coordinate their activities",
        "d) The process of allocating memory for files"
      ],
      "curr_ans": "c) The process of ensuring that multiple processes or threads cooperate and coordinate their activities"
    },
    {
      "question": "What is 'interrupt latency' in an operating system?",
      "answer": [
        "a) The time taken to execute an interrupt handler",
        "b) The time taken to boot up the operating system",
        "c) The time taken to switch between processes",
        "d) The time taken to load the operating system into memory"
      ],
      "curr_ans": "a) The time taken to execute an interrupt handler"
    },
    {
      "question": "What is 'thread priority' in multi-threaded programming?",
      "answer": [
        "a) The number of threads in a process",
        "b) The maximum time a thread can run before being interrupted",
        "c) A value that determines the importance or order of execution of threads",
        "d) The number of CPU cores available for running threads"
      ],
      "curr_ans": "c) A value that determines the importance or order of execution of threads"
    },
    {
      "question": "Which type of memory is used to store frequently accessed data and instructions in a CPU?",
      "answer": [
        "a) RAM",
        "b) Cache memory",
        "c) Virtual memory",
        "d) ROM"
      ],
      "curr_ans": "b) Cache memory"
    },
    {
      "question": "What is 'CPU scheduling' in an operating system?",
      "answer": [
        "a) The process of allocating memory for processes",
        "b) The process of selecting which process to execute next from the ready queue",
        "c) The process of swapping processes in and out of main memory",
        "d) The process of managing input and output operations"
      ],
      "curr_ans": "b) The process of selecting which process to execute next from the ready queue"
    }
  ]
  ],
},
{
  title:"COMPUTER NETWORK MCQ",
  image:"img1",

  prob:[
    [
      {
        "question": "What does LAN stand for in networking?",
        "answer": [
          "a) Local Area Network",
          "b) Long-range Area Network",
          "c) Large-scale Area Network",
          "d) Link Access Network"
        ],
        "curr_ans": "a) Local Area Network"
      },
      {
        "question": "What is the purpose of the OSI (Open Systems Interconnection) model in computer networking?",
        "answer": [
          "a) To provide a standard framework for networking protocols",
          "b) To encrypt data during transmission",
          "c) To manage hardware resources",
          "d) To create virtual private networks"
        ],
        "curr_ans": "a) To provide a standard framework for networking protocols"
      },
      {
        "question": "Which layer of the OSI model is responsible for routing data between networks?",
        "answer": [
          "a) Physical layer",
          "b) Network layer",
          "c) Transport layer",
          "d) Data link layer"
        ],
        "curr_ans": "b) Network layer"
      },
      {
        "question": "What is the primary function of ARP (Address Resolution Protocol) in computer networking?",
        "answer": [
          "a) To translate domain names to IP addresses",
          "b) To encrypt data during transmission",
          "c) To map IP addresses to MAC addresses",
          "d) To establish secure connections"
        ],
        "curr_ans": "c) To map IP addresses to MAC addresses"
      },
      {
        "question": "Which protocol is used for sending email messages over the Internet?",
        "answer": [
          "a) FTP (File Transfer Protocol)",
          "b) HTTP (Hypertext Transfer Protocol)",
          "c) SMTP (Simple Mail Transfer Protocol)",
          "d) POP3 (Post Office Protocol 3)"
        ],
        "curr_ans": "c) SMTP (Simple Mail Transfer Protocol)"
      },
      {
        "question": "What is the purpose of NAT (Network Address Translation) in a home router?",
        "answer": [
          "a) To block incoming network traffic",
          "b) To assign IP addresses to devices on the local network",
          "c) To map private IP addresses to a single public IP address for outgoing traffic",
          "d) To establish secure VPN connections"
        ],
        "curr_ans": "c) To map private IP addresses to a single public IP address for outgoing traffic"
      },
      {
        "question": "What is a MAC address?",
        "answer": [
          "a) A unique 32-bit address assigned to each device on a network",
          "b) A 128-bit address used for encryption in VPNs",
          "c) A domain name used for website addresses",
          "d) A unique hardware address assigned to each network interface card (NIC)"
        ],
        "curr_ans": "d) A unique hardware address assigned to each network interface card (NIC)"
      },
      {
        "question": "Which network topology connects all devices in a linear chain?",
        "answer": [
          "a) Bus",
          "b) Star",
          "c) Ring",
          "d) Mesh"
        ],
        "curr_ans": "a) Bus"
      },
      {
        "question": "What is the primary purpose of a firewall in computer networking?",
        "answer": [
          "a) To filter and control network traffic to protect against unauthorized access and threats",
          "b) To boost the speed of data transmission",
          "c) To encrypt all data on the network",
          "d) To manage IP address assignments"
        ],
        "curr_ans": "a) To filter and control network traffic to protect against unauthorized access and threats"
      },
      {
        "question": "Which type of IP address is used for communication within a local network and is not routable on the internet?",
        "answer": [
          "a) Public IP address",
          "b) Dynamic IP address",
          "c) Private IP address",
          "d) Static IP address"
        ],
        "curr_ans": "c) Private IP address"
      },
      {
        "question": "What does DNS (Domain Name System) do in computer networking?",
        "answer": [
          "a) Encrypts data for secure transmission",
          "b) Resolves domain names to IP addresses",
          "c) Routes data between networks",
          "d) Manages hardware resources"
        ],
        "curr_ans": "b) Resolves domain names to IP addresses"
      },
      {
        "question": "Which protocol is used for secure communication over the web, ensuring that data transmitted between a client and server remains confidential?",
        "answer": [
          "a) HTTP",
          "b) FTP",
          "c) SSL/TLS",
          "d) SMTP"
        ],
        "curr_ans": "c) SSL/TLS"
      },
      {
        "question": "What is the purpose of ICMP (Internet Control Message Protocol) in networking?",
        "answer": [
          "a) To route data between networks",
          "b) To translate domain names to IP addresses",
          "c) To manage hardware resources",
          "d) To send error messages and operational information about network conditions"
        ],
        "curr_ans": "d) To send error messages and operational information about network conditions"
      },
      {
        "question": "What is the maximum data transmission rate of a standard Ethernet connection using twisted-pair cables?",
        "answer": [
          "a) 10 Mbps (Megabits per second)",
          "b) 100 Mbps",
          "c) 1 Gbps (Gigabit per second)",
          "d) 10 Gbps"
        ],
        "curr_ans": "c) 1 Gbps (Gigabit per second)"
      },
      {
        "question": "What is the purpose of a router in computer networking?",
        "answer": [
          "a) To connect devices within the same local network",
          "b) To amplify network signals",
          "c) To connect different networks and route data between them",
          "d) To provide DNS resolution"
        ],
        "curr_ans": "c) To connect different networks and route data between them"
      },
      {
        "question": "Which network device is used to connect devices within the same local network and operate at the data link layer?",
        "answer": [
          "a) Router",
          "b) Switch",
          "c) Firewall",
          "d) Modem"
        ],
        "curr_ans": "b) Switch"
      },
      {
        "question": "In networking, what is the purpose of the TCP (Transmission Control Protocol)?",
        "answer": [
          "a) To provide error checking and correction for data transmission",
          "b) To compress data before transmission",
          "c) To route data between networks",
          "d) To resolve domain names to IP addresses"
        ],
        "curr_ans": "a) To provide error checking and correction for data transmission"
      },
      {
        "question": "What does HTTP stand for in the context of web communication?",
        "answer": [
          "a) HyperText Transfer Protocol",
          "b) High-Traffic Transport Protocol",
          "c) Host-to-Host Transfer Protocol",
          "d) Hyperlink and Text Transfer Protocol"
        ],
        "curr_ans": "a) HyperText Transfer Protocol"
      },
      {
        "question": "Which network protocol is used for transferring files over the Internet?",
        "answer": [
          "a) FTP",
          "b) HTTP",
          "c) SMTP",
          "d) TCP"
        ],
        "curr_ans": "a) FTP (File Transfer Protocol)"
      },
      {
        "question": "What is the purpose of a proxy server in computer networking?",
        "answer": [
          "a) To protect against viruses and malware",
          "b) To route data between networks",
          "c) To provide a secure tunnel for data transmission",
          "d) To cache and forward web requests on behalf of clients"
        ],
        "curr_ans": "d) To cache and forward web requests on behalf of clients"
      }
    ],
    [
      {
        "question": "What does DNS stand for in computer networking?",
        "answer": [
          "a) Data Network Services",
          "b) Domain Name System",
          "c) Dynamic Network Security",
          "d) Digital Network Storage"
        ],
        "curr_ans": "b) Domain Name System"
      },
      {
        "question": "Which layer of the OSI model is responsible for ensuring error-free data transmission?",
        "answer": [
          "a) Physical layer",
          "b) Data link layer",
          "c) Transport layer",
          "d) Presentation layer"
        ],
        "curr_ans": "c) Transport layer"
      },
      {
        "question": "What is the primary function of a hub in networking?",
        "answer": [
          "a) To filter and control network traffic",
          "b) To connect different network segments",
          "c) To route data between networks",
          "d) To provide wireless access"
        ],
        "curr_ans": "b) To connect different network segments"
      },
      {
        "question": "What is the purpose of a subnet mask in IP networking?",
        "answer": [
          "a) To identify the network portion of an IP address",
          "b) To encrypt data during transmission",
          "c) To assign IP addresses to devices on a network",
          "d) To provide DNS resolution"
        ],
        "curr_ans": "a) To identify the network portion of an IP address"
      },
      {
        "question": "Which network protocol is used for remote terminal connection and file transfer in a secure manner?",
        "answer": [
          "a) FTP",
          "b) SSH",
          "c) HTTP",
          "d) SMTP"
        ],
        "curr_ans": "b) SSH (Secure Shell)"
      },
      {
        "question": "What does DHCP stand for in networking?",
        "answer": [
          "a) Dynamic Host Configuration Protocol",
          "b) Data Hosting and Cloud Platform",
          "c) Digital Hyperlink Control Protocol",
          "d) Domain Host Configuration Protocol"
        ],
        "curr_ans": "a) Dynamic Host Configuration Protocol"
      },
      {
        "question": "Which wireless network standard is known for its high data transfer rates and is commonly used for home Wi-Fi networks?",
        "answer": [
          "a) 802.11a",
          "b) 802.11b",
          "c) 802.11n",
          "d) 802.11ac"
        ],
        "curr_ans": "d) 802.11ac"
      },
      {
        "question": "What is the purpose of a MAC filter in wireless networking?",
        "answer": [
          "a) To encrypt wireless data transmission",
          "b) To restrict access to specific devices by their MAC addresses",
          "c) To boost wireless signal strength",
          "d) To manage IP address assignments"
        ],
        "curr_ans": "b) To restrict access to specific devices by their MAC addresses"
      },
      {
        "question": "In the context of IP addressing, what is the loopback address?",
        "answer": [
          "a) 192.168.1.1",
          "b) 10.0.0.1",
          "c) 127.0.0.1",
          "d) 172.16.0.1"
        ],
        "curr_ans": "c) 127.0.0.1"
      },
      {
        "question": "Which network protocol is used for transferring web pages and resources between a web server and a client browser?",
        "answer": [
          "a) FTP",
          "b) HTTP",
          "c) SMTP",
          "d) POP3"
        ],
        "curr_ans": "b) HTTP (Hypertext Transfer Protocol)"
      },
      {
        "question": "What is the purpose of a VPN (Virtual Private Network) in networking?",
        "answer": [
          "a) To provide high-speed internet access",
          "b) To create a secure, encrypted connection over an untrusted network",
          "c) To manage IP address assignments",
          "d) To route data between networks"
        ],
        "curr_ans": "b) To create a secure, encrypted connection over an untrusted network"
      },
      {
        "question": "Which network device is used to connect multiple devices within the same local network and operates at the network layer of the OSI model?",
        "answer": [
          "a) Router",
          "b) Modem",
          "c) Switch",
          "d) Bridge"
        ],
        "curr_ans": "c) Switch"
      },
      {
        "question": "What is the purpose of a proxy ARP (Address Resolution Protocol) in networking?",
        "answer": [
          "a) To translate domain names to IP addresses",
          "b) To map IP addresses to MAC addresses",
          "c) To forward network traffic between different networks",
          "d) To optimize network performance"
        ],
        "curr_ans": "c) To forward network traffic between different networks"
      },
      {
        "question": "Which network topology connects all devices to a central hub or switch?",
        "answer": [
          "a) Bus",
          "b) Star",
          "c) Ring",
          "d) Mesh"
        ],
        "curr_ans": "b) Star"
      },
      {
        "question": "In networking, what is the purpose of ICMP Echo Request and Echo Reply messages?",
        "answer": [
          "a) To route data between networks",
          "b) To map IP addresses to MAC addresses",
          "c) To test network connectivity using ping",
          "d) To encrypt data during transmission"
        ],
        "curr_ans": "c) To test network connectivity using ping"
      },
      {
        "question": "Which network device is used to segment a network into smaller broadcast domains and operates at the network layer of the OSI model?",
        "answer": [
          "a) Router",
          "b) Hub",
          "c) Switch",
          "d) Bridge"
        ],
        "curr_ans": "a) Router"
      },
      {
        "question": "What is the purpose of an IP address in computer networking?",
        "answer": [
          "a) To encrypt data during transmission",
          "b) To identify a specific device on a network",
          "c) To manage hardware resources",
          "d) To establish secure VPN connections"
        ],
        "curr_ans": "b) To identify a specific device on a network"
      },
      {
        "question": "Which networking protocol is used for sending and receiving email messages between email clients and email servers?",
        "answer": [
          "a) HTTP",
          "b) FTP",
          "c) SMTP",
          "d) DNS"
        ],
        "curr_ans": "c) SMTP (Simple Mail Transfer Protocol)"
      },
      {
        "question": "What does LAN stand for in networking?",
        "answer": [
          "a) Local Area Network",
          "b) Long-range Area Network",
          "c) Large-scale Area Network",
          "d) Link Access Network"
        ],
        "curr_ans": "a) Local Area Network"
      }
    ],
    [
      {
        "question": "Which protocol is used to assign IP addresses to devices on a network automatically?",
        "answer": [
          "a) HTTP",
          "b) FTP",
          "c) DNS",
          "d) DHCP"
        ],
        "curr_ans": "d) DHCP (Dynamic Host Configuration Protocol)"
      },
      {
        "question": "What is the purpose of a MAC (Media Access Control) address?",
        "answer": [
          "a) To identify a device on a network",
          "b) To encrypt data during transmission",
          "c) To resolve domain names to IP addresses",
          "d) To route data between networks"
        ],
        "curr_ans": "a) To identify a device on a network"
      },
      {
        "question": "Which layer of the OSI model is responsible for error detection and correction in data transmission?",
        "answer": [
          "a) Physical layer",
          "b) Data link layer",
          "c) Transport layer",
          "d) Network layer"
        ],
        "curr_ans": "b) Data link layer"
      },
      {
        "question": "What is the purpose of NAT (Network Address Translation) in home routers?",
        "answer": [
          "a) To encrypt network traffic",
          "b) To assign public IP addresses to devices",
          "c) To map private IP addresses to a single public IP address for outgoing traffic",
          "d) To filter incoming network traffic"
        ],
        "curr_ans": "c) To map private IP addresses to a single public IP address for outgoing traffic"
      },
      {
        "question": "Which wireless encryption protocol is considered the most secure for Wi-Fi networks?",
        "answer": [
          "a) WEP (Wired Equivalent Privacy)",
          "b) WPA (Wi-Fi Protected Access)",
          "c) SSL (Secure Sockets Layer)",
          "d) FTP (File Transfer Protocol)"
        ],
        "curr_ans": "b) WPA (Wi-Fi Protected Access)"
      },
      {
        "question": "What does TCP/IP stand for in networking?",
        "answer": [
          "a) Transmission Control Protocol/Internet Protocol",
          "b) Text Control Protocol/Information Protocol",
          "c) Technical Control Protocol/Internet Provider",
          "d) Transfer Control Protocol/Information Provider"
        ],
        "curr_ans": "a) Transmission Control Protocol/Internet Protocol"
      },
      {
        "question": "What is the primary purpose of an IP router in networking?",
        "answer": [
          "a) To connect devices within the same local network",
          "b) To amplify network signals",
          "c) To connect different networks and route data between them",
          "d) To provide DNS resolution"
        ],
        "curr_ans": "c) To connect different networks and route data between them"
      },
      {
        "question": "Which network topology connects devices in a circular fashion, with each device connected to exactly two others?",
        "answer": [
          "a) Bus",
          "b) Star",
          "c) Ring",
          "d) Mesh"
        ],
        "curr_ans": "c) Ring"
      },
      {
        "question": "What is the primary role of a firewall in computer networking?",
        "answer": [
          "a) To filter and control network traffic to protect against unauthorized access and threats",
          "b) To provide high-speed internet access",
          "c) To encrypt all data on the network",
          "d) To manage IP address assignments"
        ],
        "curr_ans": "a) To filter and control network traffic to protect against unauthorized access and threats"
      },
      {
        "question": "Which network protocol is used for converting domain names into IP addresses?",
        "answer": [
          "a) HTTP",
          "b) FTP",
          "c) DNS",
          "d) DHCP"
        ],
        "curr_ans": "c) DNS (Domain Name System)"
      },
      {
        "question": "In networking, what does SSL/TLS provide?",
        "answer": [
          "a) Secure file transfer",
          "b) Secure email communication",
          "c) Secure web communication",
          "d) Secure remote access"
        ],
        "curr_ans": "c) Secure web communication"
      },
      {
        "question": "What is the purpose of a gateway in networking?",
        "answer": [
          "a) To manage IP address assignments",
          "b) To amplify network signals",
          "c) To provide a bridge between different network technologies",
          "d) To encrypt data transmission"
        ],
        "curr_ans": "c) To provide a bridge between different network technologies"
      },
      {
        "question": "What is a DMZ (Demilitarized Zone) in networking?",
        "answer": [
          "a) A highly secure area on a network",
          "b) A zone with no network connectivity",
          "c) A buffer zone between a trusted network and an untrusted network",
          "d) A zone reserved for military use"
        ],
        "curr_ans": "c) A buffer zone between a trusted network and an untrusted network"
      },
      {
        "question": "Which network device is used to connect devices within the same local network and operates at the data link layer of the OSI model?",
        "answer": [
          "a) Router",
          "b) Modem",
          "c) Switch",
          "d) Bridge"
        ],
        "curr_ans": "c) Switch"
      },
      {
        "question": "In networking, what does ICMP stand for?",
        "answer": [
          "a) Internet Control Message Protocol",
          "b) Internet Communication Management Protocol",
          "c) Internet Connection and Management Protocol",
          "d) Internet Configuration and Messaging Protocol"
        ],
        "curr_ans": "a) Internet Control Message Protocol"
      },
      {
        "question": "What is the maximum data transmission rate of a standard Gigabit Ethernet connection using twisted-pair cables?",
        "answer": [
          "a) 10 Mbps",
          "b) 100 Mbps",
          "c) 1 Gbps",
          "d) 10 Gbps"
        ],
        "curr_ans": "c) 1 Gbps"
      },
      {
        "question": "What is the purpose of a proxy server in networking?",
        "answer": [
          "a) To protect against viruses and malware",
          "b) To route data between networks",
          "c) To provide a secure tunnel for data transmission",
          "d) To cache and forward web requests on behalf of clients"
        ],
        "curr_ans": "d) To cache and forward web requests on behalf of clients"
      },
      {
        "question": "Which network protocol is commonly used for transferring files between a client and a server over a network?",
        "answer": [
          "a) HTTP",
          "b) FTP",
          "c) SMTP",
          "d) TCP"
        ],
        "curr_ans": "b) FTP (File Transfer Protocol)"
      },
      {
        "question": "What is a VLAN (Virtual Local Area Network) in networking?",
        "answer": [
          "a) A wireless network",
          "b) A separate physical network",
          "c) A logical network segment within a physical network",
          "d) A network without routers"
        ],
        "curr_ans": "c) A logical network segment within a physical network"
      },
      {
        "question": "Which network protocol is used to send email from a client to a mail server?",
        "answer": [
          "a) HTTP",
          "b) FTP",
          "c) SMTP",
          "d) POP3"
        ],
        "curr_ans": "c) SMTP (Simple Mail Transfer Protocol)"
      },
     
    ]
    
    

    




  ]
},{
  title:"DSA MCQ TEST",
  image:"img1.jpg",
  prob:[
    [
      {
        "question": "What is a data structure?",
        "answer": [
          "a) A way to organize and store data",
          "b) A programming language",
          "c) A type of algorithm",
          "d) A hardware component"
        ],
        "curr_ans": "a) A way to organize and store data"
      },
      {
        "question": "Which data structure follows the Last In, First Out (LIFO) principle?",
        "answer": [
          "a) Queue",
          "b) Stack",
          "c) Linked list",
          "d) Tree"
        ],
        "curr_ans": "b) Stack"
      },
      {
        "question": "What is the time complexity of inserting an element at the beginning of an array?",
        "answer": [
          "a) O(1)",
          "b) O(n)",
          "c) O(log n)",
          "d) O(n^2)"
        ],
        "curr_ans": "b) O(n)"
      },
      {
        "question": "Which data structure is used to represent a hierarchical structure with a root and child nodes?",
        "answer": [
          "a) Queue",
          "b) Stack",
          "c) Linked list",
          "d) Tree"
        ],
        "curr_ans": "d) Tree"
      },
      {
        "question": "What is the primary purpose of a hash table?",
        "answer": [
          "a) Sorting elements",
          "b) Storing data in a linked list",
          "c) Searching for elements",
          "d) Quickly accessing data based on a key"
        ],
        "curr_ans": "d) Quickly accessing data based on a key"
      },
      {
        "question": "Which sorting algorithm has an average-case time complexity of O(n log n)?",
        "answer": [
          "a) Bubble Sort",
          "b) Insertion Sort",
          "c) Quick Sort",
          "d) Selection Sort"
        ],
        "curr_ans": "c) Quick Sort"
      },
      {
        "question": "What is the purpose of an algorithm?",
        "answer": [
          "a) To define a programming language",
          "b) To store data efficiently",
          "c) To solve a specific problem or perform a task",
          "d) To design hardware components"
        ],
        "curr_ans": "c) To solve a specific problem or perform a task"
      },
      {
        "question": "Which data structure allows for efficient insertion and deletion of elements at both ends?",
        "answer": [
          "a) Stack",
          "b) Queue",
          "c) Linked list",
          "d) Array"
        ],
        "curr_ans": "c) Linked list"
      },
      {
        "question": "In binary search, what is the key property of the input data?",
        "answer": [
          "a) The data must be sorted",
          "b) The data must be unsorted",
          "c) The data must be in reverse order",
          "d) The data must be of a specific data type"
        ],
        "curr_ans": "a) The data must be sorted"
      },
      {
        "question": "What is the time complexity of searching for an element in a balanced binary search tree (BST)?",
        "answer": [
          "a) O(1)",
          "b) O(log n)",
          "c) O(n)",
          "d) O(n^2)"
        ],
        "curr_ans": "b) O(log n)"
      },
      {
        "question": "Which data structure is used to implement a stack?",
        "answer": [
          "a) Array",
          "b) Linked list",
          "c) Queue",
          "d) Tree"
        ],
        "curr_ans": "a) Array"
      },
      {
        "question": "What is the main advantage of using a linked list over an array?",
        "answer": [
          "a) Linked lists are faster for random access",
          "b) Linked lists are more memory-efficient",
          "c) Linked lists can store elements of different data types",
          "d) Linked lists have a fixed size"
        ],
        "curr_ans": "b) Linked lists are more memory-efficient"
      },
      {
        "question": "Which searching algorithm works by repeatedly dividing the search interval in half?",
        "answer": [
          "a) Linear search",
          "b) Binary search",
          "c) Depth-First Search (DFS)",
          "d) Breadth-First Search (BFS)"
        ],
        "curr_ans": "b) Binary search"
      },
      {
        "question": "What is the time complexity of the quicksort algorithm in its worst-case scenario?",
        "answer": [
          "a) O(1)",
          "b) O(n)",
          "c) O(log n)",
          "d) O(n^2)"
        ],
        "curr_ans": "d) O(n^2)"
      },
      {
        "question": "Which data structure is typically used to implement a queue?",
        "answer": [
          "a) Stack",
          "b) Linked list",
          "c) Tree",
          "d) Array"
        ],
        "curr_ans": "d) Array"
      },
      {
        "question": "What is a graph data structure used to represent?",
        "answer": [
          "a) A linear data structure",
          "b) A hierarchical structure",
          "c) A collection of nodes and edges",
          "d) A stack data structure"
        ],
        "curr_ans": "c) A collection of nodes and edges"
      },
      {
        "question": "Which sorting algorithm works by repeatedly selecting the minimum element and moving it to the beginning of the array?",
        "answer": [
          "a) Bubble Sort",
          "b) Insertion Sort",
          "c) Quick Sort",
          "d) Selection Sort"
        ],
        "curr_ans": "d) Selection Sort"
      },
      {
        "question": "What is the primary goal of dynamic programming in algorithms?",
        "answer": [
          "a) To design hardware components",
          "b) To solve complex problems by breaking them into smaller subproblems",
          "c) To sort data efficiently",
          "d) To search for elements in a data structure"
        ],
        "curr_ans": "b) To solve complex problems by breaking them into smaller subproblems"
      },
      {
        "question": "Which data structure is used to implement a priority queue?",
        "answer": [
          "a) Array",
          "b) Linked list",
          "c) Heap",
          "d) Tree"
        ],
        "curr_ans": "c) Heap"
      },
      {
        "question": "What is the primary purpose of an AVL tree in data structures?",
        "answer": [
          "a) To store data in a linked list",
          "b) To implement a stack",
          "c) To maintain a balanced binary search tree",
          "d) To perform sorting operations"
        ],
        "curr_ans": "c) To maintain a balanced binary search tree"
      }
    ],
    [
      {
        "question": "What is the time complexity of a linear search in an unsorted array?",
        "answer": [
          "a) O(1)",
          "b) O(log n)",
          "c) O(n)",
          "d) O(n^2)"
        ],
        "curr_ans": "c) O(n)"
      },
      {
        "question": "Which data structure is used to implement a queue with constant-time enqueue and dequeue operations?",
        "answer": [
          "a) Stack",
          "b) Linked list",
          "c) Array",
          "d) Tree"
        ],
        "curr_ans": "c) Array"
      },
      {
        "question": "What is the primary purpose of a binary search tree (BST) in data structures?",
        "answer": [
          "a) To store data in a linked list",
          "b) To implement a stack",
          "c) To maintain a sorted collection of elements",
          "d) To perform sorting operations"
        ],
        "curr_ans": "c) To maintain a sorted collection of elements"
      },
      {
        "question": "Which algorithm is used for finding the shortest path in a weighted graph?",
        "answer": [
          "a) Depth-First Search (DFS)",
          "b) Breadth-First Search (BFS)",
          "c) Dijkstra's algorithm",
          "d) Kruskal's algorithm"
        ],
        "curr_ans": "c) Dijkstra's algorithm"
      },
      {
        "question": "What is the time complexity of the merge sort algorithm?",
        "answer": [
          "a) O(1)",
          "b) O(n)",
          "c) O(log n)",
          "d) O(n log n)"
        ],
        "curr_ans": "d) O(n log n)"
      },
      {
        "question": "In data structures, what is a priority queue?",
        "answer": [
          "a) A queue with a fixed size",
          "b) A queue with constant-time enqueue and dequeue operations",
          "c) A queue where elements are processed based on their priority",
          "d) A queue with a random order of elements"
        ],
        "curr_ans": "c) A queue where elements are processed based on their priority"
      },
      {
        "question": "What is the main purpose of the divide-and-conquer strategy in algorithms?",
        "answer": [
          "a) To implement data structures",
          "b) To create complex data structures",
          "c) To solve problems by breaking them into smaller, more manageable subproblems",
          "d) To perform sorting operations"
        ],
        "curr_ans": "c) To solve problems by breaking them into smaller, more manageable subproblems"
      },
      {
        "question": "Which sorting algorithm works by repeatedly comparing and swapping adjacent elements?",
        "answer": [
          "a) Bubble Sort",
          "b) Insertion Sort",
          "c) Quick Sort",
          "d) Selection Sort"
        ],
        "curr_ans": "a) Bubble Sort"
      },
      {
        "question": "What is a hash collision in data structures?",
        "answer": [
          "a) A situation where two elements in a hash table have the same key",
          "b) A situation where a hash table is empty",
          "c) A situation where the hash table is too large",
          "d) A situation where a hash table has a single element"
        ],
        "curr_ans": "a) A situation where two elements in a hash table have the same key"
      },
      {
        "question": "Which data structure is used for implementing undo functionality in text editors?",
        "answer": [
          "a) Stack",
          "b) Queue",
          "c) Linked list",
          "d) Tree"
        ],
        "curr_ans": "a) Stack"
      },
      {
        "question": "What is the time complexity of finding the maximum element in an unsorted array?",
        "answer": [
          "a) O(1)",
          "b) O(log n)",
          "c) O(n)",
          "d) O(n^2)"
        ],
        "curr_ans": "c) O(n)"
      },
      {
        "question": "Which algorithm is used to find the shortest path in an unweighted graph?",
        "answer": [
          "a) Depth-First Search (DFS)",
          "b) Breadth-First Search (BFS)",
          "c) Dijkstra's algorithm",
          "d) Kruskal's algorithm"
        ],
        "curr_ans": "b) Breadth-First Search (BFS)"
      },
      {
        "question": "In data structures, what is a doubly linked list?",
        "answer": [
          "a) A linked list where each node points to two other nodes",
          "b) A linked list where each node points to the next node only",
          "c) A linked list where each node contains two data elements",
          "d) A linked list with a fixed size"
        ],
        "curr_ans": "a) A linked list where each node points to two other nodes"
      },
      {
        "question": "What is the primary goal of a red-black tree in data structures?",
        "answer": [
          "a) To store data in a linked list",
          "b) To implement a stack",
          "c) To maintain a balanced binary search tree",
          "d) To perform sorting operations"
        ],
        "curr_ans": "c) To maintain a balanced binary search tree"
      },
      {
        "question": "Which data structure is used to implement a LIFO (Last In, First Out) storage system?",
        "answer": [
          "a) Queue",
          "b) Stack",
          "c) Linked list",
          "d) Tree"
        ],
        "curr_ans": "b) Stack"
      },
      {
        "question": "What is the primary purpose of a heap data structure in algorithms?",
        "answer": [
          "a) To store data in a sorted list",
          "b) To implement a queue",
          "c) To maintain a priority queue",
          "d) To perform sorting operations"
        ],
        "curr_ans": "c) To maintain a priority queue"
      },
      {
        "question": "In data structures, what is a circular linked list?",
        "answer": [
          "a) A linked list that contains circular references",
          "b) A linked list that is sorted in a circular fashion",
          "c) A linked list where the last node points back to the first node",
          "d) A linked list with a fixed size"
        ],
        "curr_ans": "c) A linked list where the last node points back to the first node"
      },
      {
        "question": "What is the primary purpose of the Floyd-Warshall algorithm?",
        "answer": [
          "a) To find the shortest path in a weighted graph",
          "b) To perform sorting operations",
          "c) To find the maximum element in an array",
          "d) To implement a queue"
        ],
        "curr_ans": "a) To find the shortest path in a weighted graph"
      },
      {
        "question": "What is a circular queue in data structures?",
        "answer": [
          "a) A queue with a fixed size",
          "b) A queue where elements are removed in a circular fashion",
          "c) A queue that contains circular references",
          "d) A queue that allows elements to be inserted at any position"
        ],
        "curr_ans": "b) A queue where elements are removed in a circular fashion"
      },
      {
        "question": "What is the time complexity of a binary search in a sorted array?",
        "answer": [
          "a) O(1)",
          "b) O(log n)",
          "c) O(n)",
          "d) O(n^2)"
        ],
        "curr_ans": "b) O(log n)"
      }
    ]
  ]
},
{
  title:"OOPs MCQ TEST",
  image:"img1",
  prob:[
    [
      {
        "question": "What is the main principle of Object-Oriented Programming (OOP)?",
        "answer": [
          "a) Inheritance",
          "b) Abstraction",
          "c) Encapsulation",
          "d) Polymorphism"
        ],
        "curr_ans": "c) Encapsulation"
      },
      {
        "question": "In OOP, what is a class?",
        "answer": [
          "a) An instance of an object",
          "b) A blueprint for creating objects",
          "c) A variable that holds data",
          "d) A method that performs an action"
        ],
        "curr_ans": "b) A blueprint for creating objects"
      },
      {
        "question": "What is inheritance in OOP?",
        "answer": [
          "a) The ability of an object to take on multiple forms",
          "b) The process of hiding the internal details of an object",
          "c) The mechanism by which a new class can inherit properties and behaviors from an existing class",
          "d) The ability to access the methods of an object"
        ],
        "curr_ans": "c) The mechanism by which a new class can inherit properties and behaviors from an existing class"
      },
      {
        "question": "What is polymorphism in OOP?",
        "answer": [
          "a) The ability to hide the implementation details of a class",
          "b) The ability of an object to take on multiple forms",
          "c) The process of creating multiple instances of a class",
          "d) The process of defining a class"
        ],
        "curr_ans": "b) The ability of an object to take on multiple forms"
      },
      {
        "question": "What is encapsulation in OOP?",
        "answer": [
          "a) The ability to hide the implementation details of a class",
          "b) The process of creating multiple instances of a class",
          "c) The process of defining a class",
          "d) The ability of an object to take on multiple forms"
        ],
        "curr_ans": "a) The ability to hide the implementation details of a class"
      },
      {
        "question": "What is an object in OOP?",
        "answer": [
          "a) A variable that holds data",
          "b) A method that performs an action",
          "c) An instance of a class",
          "d) A blueprint for creating classes"
        ],
        "curr_ans": "c) An instance of a class"
      },
      {
        "question": "What is a constructor in OOP?",
        "answer": [
          "a) A method used to destroy objects",
          "b) A special method used to create and initialize objects",
          "c) A method that performs a specific action",
          "d) A method used to hide the internal details of a class"
        ],
        "curr_ans": "b) A special method used to create and initialize objects"
      },
      {
        "question": "In OOP, what is a method?",
        "answer": [
          "a) A variable that holds data",
          "b) A special type of class",
          "c) A special method used to destroy objects",
          "d) A function that performs an action associated with an object"
        ],
        "curr_ans": "d) A function that performs an action associated with an object"
      },
      {
        "question": "What is the concept of data hiding in OOP?",
        "answer": [
          "a) Exposing all data to external access",
          "b) Keeping data private and inaccessible from outside the class",
          "c) Using data to create objects",
          "d) Sharing data between multiple objects"
        ],
        "curr_ans": "b) Keeping data private and inaccessible from outside the class"
      },
      {
        "question": "What is method overloading in OOP?",
        "answer": [
          "a) Creating multiple instances of a method",
          "b) Defining a method with the same name but different parameters in the same class",
          "c) Inheriting methods from a parent class",
          "d) Creating a method with a long name"
        ],
        "curr_ans": "b) Defining a method with the same name but different parameters in the same class"
      },
      {
        "question": "What is method overriding in OOP?",
        "answer": [
          "a) Creating multiple instances of a method",
          "b) Defining a method with the same name and parameters in a subclass to provide a new implementation",
          "c) Inheriting methods from a parent class",
          "d) Creating a method with a long name"
        ],
        "curr_ans": "b) Defining a method with the same name and parameters in a subclass to provide a new implementation"
      },
      {
        "question": "What is a superclass in OOP?",
        "answer": [
          "a) A class that inherits from another class",
          "b) A class that has no methods",
          "c) A class that contains only private variables",
          "d) A class with multiple constructors"
        ],
        "curr_ans": "a) A class that inherits from another class"
      },
      {
        "question": "What is a subclass in OOP?",
        "answer": [
          "a) A class that inherits from another class",
          "b) A class that has no methods",
          "c) A class that contains only private variables",
          "d) A class with multiple constructors"
        ],
        "curr_ans": "a) A class that inherits from another class"
      },
      {
        "question": "What is composition in OOP?",
        "answer": [
          "a) A method that creates objects",
          "b) A relationship where one class contains an instance of another class",
          "c) A process of defining classes",
          "d) A method that performs an action"
        ],
        "curr_ans": "b) A relationship where one class contains an instance of another class"
      },
      {
        "question": "What is a static method in OOP?",
        "answer": [
          "a) A method that can only be called on objects",
          "b) A method that is not associated with any object and can be called on the class itself",
          "c) A method that is automatically called when an object is created",
          "d) A method that can only be called from within the class"
        ],
        "curr_ans": "b) A method that is not associated with any object and can be called on the class itself"
      },
      {
        "question": "What is the concept of abstraction in OOP?",
        "answer": [
          "a) The process of defining classes",
          "b) The ability to hide the implementation details of a class",
          "c) The process of creating objects",
          "d) The process of creating multiple instances of a class"
        ],
        "curr_ans": "b) The ability to hide the implementation details of a class"
      },
      {
        "question": "What is an abstract class in OOP?",
        "answer": [
          "a) A class with no methods",
          "b) A class that cannot be instantiated and is meant to be subclassed",
          "c) A class with only private variables",
          "d) A class that is not associated with any object"
        ],
        "curr_ans": "b) A class that cannot be instantiated and is meant to be subclassed"
      },
      {
        "question": "What is an interface in OOP?",
        "answer": [
          "a) A class with no methods",
          "b) A class that cannot be instantiated and is meant to be subclassed",
          "c) A set of abstract methods that must be implemented by any class that implements the interface",
          "d) A class with only private variables"
        ],
        "curr_ans": "c) A set of abstract methods that must be implemented by any class that implements the interface"
      },
      {
        "question": "What is dynamic binding in OOP?",
        "answer": [
          "a) The process of defining classes at runtime",
          "b) The process of creating objects with dynamic memory allocation",
          "c) The process of associating a method call with the actual method implementation at runtime",
          "d) The process of hiding the implementation details of a class"
        ],
        "curr_ans": "c) The process of associating a method call with the actual method implementation at runtime"
      },
      {
        "question": "What is the concept of encapsulation in OOP?",
        "answer": [
          "a) It refers to the process of defining a class",
          "b) It refers to the process of bundling data and methods that operate on that data into a single unit",
          "c) It refers to the process of creating multiple instances of a class",
          "d) It refers to the process of inheritance between classes"
        ],
        "curr_ans": "b) It refers to the process of bundling data and methods that operate on that data into a single unit"
      }
      
    ],

    [
      {
        "question": "What is the purpose of a constructor in a class?",
        "answer": [
          "a) To destroy objects",
          "b) To hide the implementation details of a class",
          "c) To create and initialize objects",
          "d) To perform calculations"
        ],
        "curr_ans": "c) To create and initialize objects"
      },
      {
        "question": "What is the concept of method overriding in OOP?",
        "answer": [
          "a) Creating multiple instances of a method",
          "b) Defining a method with a different name in a subclass",
          "c) Redefining a method in a subclass with the same name and parameters as the superclass",
          "d) Creating a new method in a subclass"
        ],
        "curr_ans": "c) Redefining a method in a subclass with the same name and parameters as the superclass"
      },
      {
        "question": "What is an abstract method in OOP?",
        "answer": [
          "a) A method that cannot be called",
          "b) A method that is defined with a body",
          "c) A method that is not associated with any class",
          "d) A method that is declared without implementation and must be implemented by subclasses"
        ],
        "curr_ans": "d) A method that is declared without implementation and must be implemented by subclasses"
      },
      {
        "question": "What is the main advantage of using inheritance in OOP?",
        "answer": [
          "a) It allows for code reuse and extension of existing classes",
          "b) It makes classes immutable",
          "c) It eliminates the need for constructors",
          "d) It enforces encapsulation"
        ],
        "curr_ans": "a) It allows for code reuse and extension of existing classes"
      },
      {
        "question": "What is the purpose of the 'super' keyword in Java and other OOP languages?",
        "answer": [
          "a) It refers to a superclass",
          "b) It is used to declare variables",
          "c) It is a reserved keyword with no specific purpose",
          "d) It is used for debugging"
        ],
        "curr_ans": "a) It refers to a superclass"
      },
      {
        "question": "What is a class constructor in Java?",
        "answer": [
          "a) A method that returns a value",
          "b) A special method with the same name as the class used to create and initialize objects",
          "c) A method that is called automatically when an object is destroyed",
          "d) A method that can be called from any class"
        ],
        "curr_ans": "b) A special method with the same name as the class used to create and initialize objects"
      },
      {
        "question": "In OOP, what is encapsulation?",
        "answer": [
          "a) The ability to hide data and methods within a class",
          "b) The process of creating multiple instances of a class",
          "c) The process of defining classes",
          "d) The process of creating objects"
        ],
        "curr_ans": "a) The ability to hide data and methods within a class"
      },
      {
        "question": "What is the concept of method overloading in OOP?",
        "answer": [
          "a) Creating multiple instances of a method",
          "b) Defining a method with the same name and parameters in the same class",
          "c) Defining a method with a different name in a subclass",
          "d) Creating a new method in a subclass"
        ],
        "curr_ans": "b) Defining a method with the same name and parameters in the same class"
      },
      {
        "question": "In OOP, what is a static variable?",
        "answer": [
          "a) A variable that can be changed at runtime",
          "b) A variable that is automatically initialized to zero",
          "c) A variable that belongs to a class rather than an instance of the class",
          "d) A variable that cannot be used in a method"
        ],
        "curr_ans": "c) A variable that belongs to a class rather than an instance of the class"
      },
      {
        "question": "What is the purpose of the 'this' keyword in OOP languages like Java?",
        "answer": [
          "a) It refers to a superclass",
          "b) It refers to the current instance of a class",
          "c) It is used to declare variables",
          "d) It is a reserved keyword with no specific purpose"
        ],
        "curr_ans": "b) It refers to the current instance of a class"
      },
      {
        "question": "What is the principle of data hiding in OOP?",
        "answer": [
          "a) Exposing all data to external access",
          "b) Keeping data private and inaccessible from outside the class",
          "c) Sharing data between multiple classes",
          "d) Making all data public"
        ],
        "curr_ans": "b) Keeping data private and inaccessible from outside the class"
      },
      {
        "question": "In OOP, what is a getter method?",
        "answer": [
          "a) A method used to set the value of a private variable",
          "b) A method used to perform calculations",
          "c) A method used to retrieve the value of a private variable",
          "d) A method used to create objects"
        ],
        "curr_ans": "c) A method used to retrieve the value of a private variable"
      },
      {
        "question": "In OOP, what is a setter method?",
        "answer": [
          "a) A method used to retrieve the value of a private variable",
          "b) A method used to create objects",
          "c) A method used to set the value of a private variable",
          "d) A method used to perform calculations"
        ],
        "curr_ans": "c) A method used to set the value of a private variable"
      },
      {
        "question": "What is the purpose of the 'final' keyword in Java and other OOP languages?",
        "answer": [
          "a) It indicates that a class cannot be subclassed",
          "b) It indicates that a variable cannot be changed",
          "c) It indicates that a method cannot be overridden",
          "d) It indicates that an object cannot be destroyed"
        ],
        "curr_ans": "a) It indicates that a class cannot be subclassed"
      },
      {
        "question": "What is the concept of multiple inheritance in OOP?",
        "answer": [
          "a) The ability of a class to inherit from multiple classes",
          "b) The ability of a class to have multiple constructors",
          "c) The ability of an object to take on multiple forms",
          "d) The ability to create multiple instances of a class"
        ],
        "curr_ans": "a) The ability of a class to inherit from multiple classes"
      },
      {
        "question": "What is the role of the 'extends' keyword in Java when defining classes?",
        "answer": [
          "a) It indicates that a class is abstract",
          "b) It indicates that a class is final",
          "c) It specifies the superclass that a class inherits from",
          "d) It specifies the interface that a class implements"
        ],
        "curr_ans": "c) It specifies the superclass that a class inherits from"
      },
      {
        "question": "What is a class destructor in OOP?",
        "answer": [
          "a) A method that creates objects",
          "b) A special method used to destroy objects",
          "c) A method that is automatically called when an object is created",
          "d) A method that performs a specific action"
        ],
        "curr_ans": "b) A special method used to destroy objects"
      },
      {
        "question": "What is the concept of composition in OOP?",
        "answer": [
          "a) A relationship where one class contains an instance of another class",
          "b) A relationship where one class is a subclass of another class",
          "c) A relationship where one class has multiple constructors",
          "d) A relationship where one class has multiple methods"
        ],
        "curr_ans": "a) A relationship where one class contains an instance of another class"
      },
      {
        "question": "What is the role of the 'implements' keyword in Java when defining classes?",
        "answer": [
          "a) It indicates that a class is abstract",
          "b) It indicates that a class is final",
          "c) It specifies the interface that a class implements",
          "d) It specifies the superclass that a class inherits from"
        ],
        "curr_ans": "c) It specifies the interface that a class implements"
      },
      {
        "question": "What is the concept of method chaining in OOP?",
        "answer": [
          "a) Calling multiple methods in a sequence to perform a series of operations on an object",
          "b) Defining methods with the same name and parameters in the same class",
          "c) Using static methods to manipulate objects",
          "d) Creating multiple instances of the same class"
        ],
        "curr_ans": "a) Calling multiple methods in a sequence to perform a series of operations on an object"
    },
    {
      "question": "What is the concept of encapsulation in OOP?",
      "answer": [
        "a) It refers to the process of defining a class",
        "b) It refers to the process of bundling data and methods that operate on that data into a single unit",
        "c) It refers to the process of creating multiple instances of a class",
        "d) It refers to the process of inheritance between classes"
      ],
      "curr_ans": "b) It refers to the process of bundling data and methods that operate on that data into a single unit"
    }
        
    ]
  ]
},
{
  title:"JavaScript MCQ TEST",
  image:"img1",
  prob:[
    [
      {
        "question": "What is the purpose of a constructor in a class?",
        "answer": [
          "a) To destroy objects",
          "b) To hide the implementation details of a class",
          "c) To create and initialize objects",
          "d) To perform calculations"
        ],
        "curr_ans": "c) To create and initialize objects"
      },
      {
        "question": "What is the concept of method overriding in OOP?",
        "answer": [
          "a) Creating multiple instances of a method",
          "b) Defining a method with a different name in a subclass",
          "c) Redefining a method in a subclass with the same name and parameters as the superclass",
          "d) Creating a new method in a subclass"
        ],
        "curr_ans": "c) Redefining a method in a subclass with the same name and parameters as the superclass"
      },
      {
        "question": "What is an abstract method in OOP?",
        "answer": [
          "a) A method that cannot be called",
          "b) A method that is defined with a body",
          "c) A method that is not associated with any class",
          "d) A method that is declared without implementation and must be implemented by subclasses"
        ],
        "curr_ans": "d) A method that is declared without implementation and must be implemented by subclasses"
      },
      {
        "question": "What is the main advantage of using inheritance in OOP?",
        "answer": [
          "a) It allows for code reuse and extension of existing classes",
          "b) It makes classes immutable",
          "c) It eliminates the need for constructors",
          "d) It enforces encapsulation"
        ],
        "curr_ans": "a) It allows for code reuse and extension of existing classes"
      },
      {
        "question": "What is the purpose of the 'super' keyword in Java and other OOP languages?",
        "answer": [
          "a) It refers to a superclass",
          "b) It is used to declare variables",
          "c) It is a reserved keyword with no specific purpose",
          "d) It is used for debugging"
        ],
        "curr_ans": "a) It refers to a superclass"
      },
      {
        "question": "What is a class constructor in Java?",
        "answer": [
          "a) A method that returns a value",
          "b) A special method with the same name as the class used to create and initialize objects",
          "c) A method that is called automatically when an object is destroyed",
          "d) A method that can be called from any class"
        ],
        "curr_ans": "b) A special method with the same name as the class used to create and initialize objects"
      },
      {
        "question": "In OOP, what is encapsulation?",
        "answer": [
          "a) The ability to hide data and methods within a class",
          "b) The process of creating multiple instances of a class",
          "c) The process of defining classes",
          "d) The process of creating objects"
        ],
        "curr_ans": "a) The ability to hide data and methods within a class"
      },
      {
        "question": "What is the concept of method overloading in OOP?",
        "answer": [
          "a) Creating multiple instances of a method",
          "b) Defining a method with the same name and parameters in the same class",
          "c) Defining a method with a different name in a subclass",
          "d) Creating a new method in a subclass"
        ],
        "curr_ans": "b) Defining a method with the same name and parameters in the same class"
      },
      {
        "question": "In OOP, what is a static variable?",
        "answer": [
          "a) A variable that can be changed at runtime",
          "b) A variable that is automatically initialized to zero",
          "c) A variable that belongs to a class rather than an instance of the class",
          "d) A variable that cannot be used in a method"
        ],
        "curr_ans": "c) A variable that belongs to a class rather than an instance of the class"
      },
      {
        "question": "What is the purpose of the 'this' keyword in OOP languages like Java?",
        "answer": [
          "a) It refers to a superclass",
          "b) It refers to the current instance of a class",
          "c) It is used to declare variables",
          "d) It is a reserved keyword with no specific purpose"
        ],
        "curr_ans": "b) It refers to the current instance of a class"
      },
      {
        "question": "What is the principle of data hiding in OOP?",
        "answer": [
          "a) Exposing all data to external access",
          "b) Keeping data private and inaccessible from outside the class",
          "c) Sharing data between multiple classes",
          "d) Making all data public"
        ],
        "curr_ans": "b) Keeping data private and inaccessible from outside the class"
      },
      {
        "question": "In OOP, what is a getter method?",
        "answer": [
          "a) A method used to set the value of a private variable",
          "b) A method used to perform calculations",
          "c) A method used to retrieve the value of a private variable",
          "d) A method used to create objects"
        ],
        "curr_ans": "c) A method used to retrieve the value of a private variable"
      },
      {
        "question": "In OOP, what is a setter method?",
        "answer": [
          "a) A method used to retrieve the value of a private variable",
          "b) A method used to create objects",
          "c) A method used to set the value of a private variable",
          "d) A method used to perform calculations"
        ],
        "curr_ans": "c) A method used to set the value of a private variable"
      },
      {
        "question": "What is the purpose of the 'final' keyword in Java and other OOP languages?",
        "answer": [
          "a) It indicates that a class cannot be subclassed",
          "b) It indicates that a variable cannot be changed",
          "c) It indicates that a method cannot be overridden",
          "d) It indicates that an object cannot be destroyed"
        ],
        "curr_ans": "a) It indicates that a class cannot be subclassed"
      },
      {
        "question": "What is the concept of multiple inheritance in OOP?",
        "answer": [
          "a) The ability of a class to inherit from multiple classes",
          "b) The ability of a class to have multiple constructors",
          "c) The ability of an object to take on multiple forms",
          "d) The ability to create multiple instances of a class"
        ],
        "curr_ans": "a) The ability of a class to inherit from multiple classes"
      },
      {
        "question": "What is the role of the 'extends' keyword in Java when defining classes?",
        "answer": [
          "a) It indicates that a class is abstract",
          "b) It indicates that a class is final",
          "c) It specifies the superclass that a class inherits from",
          "d) It specifies the interface that a class implements"
        ],
        "curr_ans": "c) It specifies the superclass that a class inherits from"
      },
      {
        "question": "What is a class destructor in OOP?",
        "answer": [
          "a) A method that creates objects",
          "b) A special method used to destroy objects",
          "c) A method that is automatically called when an object is created",
          "d) A method that performs a specific action"
        ],
        "curr_ans": "b) A special method used to destroy objects"
      },
      {
        "question": "What is the concept of composition in OOP?",
        "answer": [
          "a) A relationship where one class contains an instance of another class",
          "b) A relationship where one class is a subclass of another class",
          "c) A relationship where one class has multiple constructors",
          "d) A relationship where one class has multiple methods"
        ],
        "curr_ans": "a) A relationship where one class contains an instance of another class"
      },
      {
        "question": "What is the role of the 'implements' keyword in Java when defining classes?",
        "answer": [
          "a) It indicates that a class is abstract",
          "b) It indicates that a class is final",
          "c) It specifies the interface that a class implements",
          "d) It specifies the superclass that a class inherits from"
        ],
        "curr_ans": "c) It specifies the interface that a class implements"
      },{
        "question": "What is the purpose of the 'Array.prototype.map()' method in JavaScript?",
        "answer": [
          "a) To remove elements from an array",
          "b) To add elements to an array",
          "c) To create a new array by applying a function to each element of the original array",
          "d) To sort an array"
        ],
        "curr_ans": "c) To create a new array by applying a function to each element of the original array"
      }
      

    ],

    [
      {
        "question": "What does the 'typeof' operator return for an undefined variable in JavaScript?",
        "answer": [
          "a) 'undefined'",
          "b) 'null'",
          "c) 'NaN'",
          "d) 'string'"
        ],
        "curr_ans": "a) 'undefined'"
      },
      {
        "question": "Which operator is used for strict equality comparison in JavaScript?",
        "answer": [
          "a) =",
          "b) ==",
          "c) ===",
          "d) !=="
        ],
        "curr_ans": "c) ==="
      },
      {
        "question": "What is the purpose of the 'setInterval' function in JavaScript?",
        "answer": [
          "a) To set a timer that executes a function repeatedly at specified intervals",
          "b) To set a one-time timer that executes a function",
          "c) To clear a timer",
          "d) To set the current date and time"
        ],
        "curr_ans": "a) To set a timer that executes a function repeatedly at specified intervals"
      },
      {
        "question": "Which of the following statements is true about JavaScript variables?",
        "answer": [
          "a) Variables are case-insensitive.",
          "b) Variables must always be declared with 'var'.",
          "c) Variables cannot be reassigned after declaration.",
          "d) Variables declared with 'let' are hoisted."
        ],
        "curr_ans": "d) Variables declared with 'let' are hoisted."
      },
      {
        "question": "What is the purpose of the 'parseInt' function in JavaScript?",
        "answer": [
          "a) To convert a string to an integer.",
          "b) To parse JSON data.",
          "c) To round a number to the nearest integer.",
          "d) To determine the type of a value."
        ],
        "curr_ans": "a) To convert a string to an integer."
      },
      {
        "question": "Which keyword is used to declare a block scope variable in JavaScript?",
        "answer": [
          "a) var",
          "b) let",
          "c) const",
          "d) block"
        ],
        "curr_ans": "b) let"
      },
      {
        "question": "What is a callback function in JavaScript?",
        "answer": [
          "a) A function that is called automatically when a program starts.",
          "b) A function that is used to add comments to code.",
          "c) A function that is passed as an argument to another function and is executed later.",
          "d) A function that is used to declare variables."
        ],
        "curr_ans": "c) A function that is passed as an argument to another function and is executed later."
      },
      {
        "question": "Which method is used to remove the last element from an array in JavaScript?",
        "answer": [
          "a) pop()",
          "b) push()",
          "c) shift()",
          "d) unshift()"
        ],
        "curr_ans": "a) pop()"
      },
      {
        "question": "What is the purpose of the 'split' method in JavaScript?",
        "answer": [
          "a) To join two strings together.",
          "b) To split a string into an array of substrings based on a specified delimiter.",
          "c) To replace a substring in a string.",
          "d) To remove whitespace from the beginning and end of a string."
        ],
        "curr_ans": "b) To split a string into an array of substrings based on a specified delimiter."
      },
      {
        "question": "Which JavaScript method is used to change the content of an HTML element?",
        "answer": [
          "a) replaceContent()",
          "b) innerHTML()",
          "c) setContent()",
          "d) changeText()"
        ],
        "curr_ans": "b) innerHTML()"
      },
      {
        "question": "What does the 'NaN' JavaScript property represent?",
        "answer": [
          "a) The number zero (0).",
          "b) An invalid number.",
          "c) A positive infinity value.",
          "d) A negative infinity value."
        ],
        "curr_ans": "b) An invalid number."
      },
      {
        "question": "What is the purpose of the 'forEach' method in JavaScript?",
        "answer": [
          "a) To filter elements in an array.",
          "b) To iterate over the elements of an array and apply a function to each element.",
          "c) To sort elements in an array.",
          "d) To reverse the order of elements in an array."
        ],
        "curr_ans": "b) To iterate over the elements of an array and apply a function to each element."
      },
      {
        "question": "Which statement is used to declare a conditional branch in JavaScript?",
        "answer": [
          "a) for",
          "b) if",
          "c) while",
          "d) switch"
        ],
        "curr_ans": "b) if"
      },
      {
        "question": "What is the result of 'typeof null' in JavaScript?",
        "answer": [
          "a) 'object'",
          "b) 'null'",
          "c) 'undefined'",
          "d) 'string'"
        ],
        "curr_ans": "a) 'object'"
      },
      {
        "question": "What is a closure in JavaScript?",
        "answer": [
          "a) A variable that cannot be modified.",
          "b) A function that is immediately invoked.",
          "c) A function that has access to its own scope and the scope of its outer function.",
          "d) A method that is used to close a web page."
        ],
        "curr_ans": "c) A function that has access to its own scope and the scope of its outer function."
      },
      {
        "question": "Which event occurs when the user clicks on an HTML element in JavaScript?",
        "answer": [
          "a) onmouseover",
          "b) onclick",
          "c) onkeydown",
          "d) onsubmit"
        ],
        "curr_ans": "b) onclick"
      },
      {
        "question": "What is the purpose of the 'reduce' method in JavaScript?",
        "answer": [
          "a) To add elements to an array.",
          "b) To concatenate strings.",
          "c) To iterate over the elements of an array and accumulate a single result.",
          "d) To remove elements from an array."
        ],
        "curr_ans": "c) To iterate over the elements of an array and accumulate a single result."
      },
      {
        "question": "What is the purpose of the 'bind' method in JavaScript?",
        "answer": [
          "a) To create a new array.",
          "b) To create a new object.",
          "c) To create a copy of a function with a specified 'this' value.",
          "d) To concatenate two strings."
        ],
        "curr_ans": "c) To create a copy of a function with a specified 'this' value."
      },
      {
        "question": "Which of the following is a correct way to comment out multiple lines of code in JavaScript?",
        "answer": [
          "a) // Comment",
          "b) /* Comment */",
          "c) # Comment",
          "d) -- Comment"
        ],
        "curr_ans": "b) /* Comment */"
      },
      {
        "question": "What is the purpose of the 'push' method in JavaScript?",
        "answer": [
          "a) To remove elements from an array.",
          "b) To add elements to the beginning of an array.",
          "c) To add elements to the end of an array.",
          "d) To sort elements in an array."
        ],
        "curr_ans": "c) To add elements to the end of an array."
      },
      {
        "question": "What is the JavaScript 'switch' statement primarily used for?",
        "answer": [
          "a) To declare variables.",
          "b) To perform arithmetic calculations.",
          "c) To compare a value to multiple case values and execute code based on the matching case.",
          "d) To define functions."
        ],
        "curr_ans": "c) To compare a value to multiple case values and execute code based on the matching case."
      },
      {
        "question": "What is the purpose of the 'Array.prototype.map()' method in JavaScript?",
        "answer": [
          "a) To remove elements from an array",
          "b) To add elements to an array",
          "c) To create a new array by applying a function to each element of the original array",
          "d) To sort an array"
        ],
        "curr_ans": "c) To create a new array by applying a function to each element of the original array"
      }
      
    ],
    

    [
      {
        "question": "Which operator is used to combine two or more strings in JavaScript?",
        "answer": [
          "a) +",
          "b) -",
          "c) *",
          "d) /"
        ],
        "curr_ans": "a) +"
      },
      {
        "question": "What is the purpose of the 'typeof' operator in JavaScript?",
        "answer": [
          "a) To check if a variable is defined",
          "b) To determine the type of a value or expression",
          "c) To convert a value to a string",
          "d) To create a new variable"
        ],
        "curr_ans": "b) To determine the type of a value or expression"
      },
      {
        "question": "Which of the following is not a valid JavaScript data type?",
        "answer": [
          "a) string",
          "b) boolean",
          "c) object",
          "d) int"
        ],
        "curr_ans": "d) int"
      },
      {
        "question": "What is the result of '5 == '5' in JavaScript?",
        "answer": [
          "a) true",
          "b) false",
          "c) 'true'",
          "d) 'false'"
        ],
        "curr_ans": "a) true"
      },
      {
        "question": "In JavaScript, how do you declare a variable with global scope?",
        "answer": [
          "a) var",
          "b) let",
          "c) const",
          "d) Global variables are declared automatically"
        ],
        "curr_ans": "a) var"
      },
      {
        "question": "What does the 'continue' statement do in JavaScript?",
        "answer": [
          "a) Exits the loop",
          "b) Skips the current iteration of the loop and continues with the next",
          "c) Clears the console",
          "d) Stops the script execution"
        ],
        "curr_ans": "b) Skips the current iteration of the loop and continues with the next"
      },
      {
        "question": "Which function is used to convert a string to lowercase in JavaScript?",
        "answer": [
          "a) toLowerCase()",
          "b) toUpper()",
          "c) lowerCase()",
          "d) caseLower()"
        ],
        "curr_ans": "a) toLowerCase()"
      },
      {
        "question": "What is the purpose of the 'Array.isArray()' method in JavaScript?",
        "answer": [
          "a) To check if an object is an array",
          "b) To create a new array",
          "c) To sort an array",
          "d) To remove an element from an array"
        ],
        "curr_ans": "a) To check if an object is an array"
      },
      {
        "question": "Which event occurs when an HTML form is submitted in JavaScript?",
        "answer": [
          "a) onsubmit",
          "b) onclick",
          "c) onsubmitForm",
          "d) onformsubmit"
        ],
        "curr_ans": "a) onsubmit"
      },
      {
        "question": "What is the result of 'typeof NaN' in JavaScript?",
        "answer": [
          "a) 'number'",
          "b) 'NaN'",
          "c) 'undefined'",
          "d) 'string'"
        ],
        "curr_ans": "a) 'number'"
      },
      {
        "question": "What is the purpose of the 'splice' method in JavaScript?",
        "answer": [
          "a) To split a string into an array",
          "b) To remove elements from an array and optionally replace them",
          "c) To join two arrays together",
          "d) To add elements to the beginning of an array"
        ],
        "curr_ans": "b) To remove elements from an array and optionally replace them"
      },
      {
        "question": "Which built-in object in JavaScript represents the global scope?",
        "answer": [
          "a) window",
          "b) document",
          "c) navigator",
          "d) location"
        ],
        "curr_ans": "a) window"
      },
      {
        "question": "What is the purpose of the 'Math.random()' function in JavaScript?",
        "answer": [
          "a) To generate a random integer",
          "b) To round a number to the nearest integer",
          "c) To calculate the square root of a number",
          "d) To generate a random floating-point number between 0 (inclusive) and 1 (exclusive)"
        ],
        "curr_ans": "d) To generate a random floating-point number between 0 (inclusive) and 1 (exclusive)"
      },
      {
        "question": "What does the 'typeof undefined' expression return in JavaScript?",
        "answer": [
          "a) 'undefined'",
          "b) 'null'",
          "c) 'object'",
          "d) 'string'"
        ],
        "curr_ans": "a) 'undefined'"
      },
      {
        "question": "In JavaScript, how do you declare a constant variable?",
        "answer": [
          "a) var",
          "b) let",
          "c) const",
          "d) constant"
        ],
        "curr_ans": "c) const"
      },
      {
        "question": "What is the purpose of the 'JSON.stringify()' method in JavaScript?",
        "answer": [
          "a) To parse a JSON string",
          "b) To convert a JavaScript object to a JSON string",
          "c) To retrieve data from a server",
          "d) To create a new JSON object"
        ],
        "curr_ans": "b) To convert a JavaScript object to a JSON string"
      },
      {
        "question": "What is the result of 'true + true' in JavaScript?",
        "answer": [
          "a) true",
          "b) false",
          "c) 2",
          "d) 'true'"
        ],
        "curr_ans": "c) 2"
      },
      {
        "question": "Which method is used to remove the first element from an array in JavaScript?",
        "answer": [
          "a) pop()",
          "b) shift()",
          "c) unshift()",
          "d) remove()"
        ],
        "curr_ans": "b) shift()"
      },
      {
        "question": "What is the purpose of the 'toFixed()' method in JavaScript?",
        "answer": [
          "a) To convert a number to a string",
          "b) To round a number to a specified number of decimal places",
          "c) To find the square root of a number",
          "d) To check if a number is prime"
        ],
        "curr_ans": "b) To round a number to a specified number of decimal places"
      },
      {
        "question": "Which statement is used to declare a loop in JavaScript?",
        "answer": [
          "a) if",
          "b) for",
          "c) while",
          "d) switch"
        ],
        "curr_ans": "b) for"
      },
      {
        "question": "What is the purpose of the 'concat()' method in JavaScript?",
        "answer": [
          "a) To concatenate two arrays",
          "b) To split a string into an array",
          "c) To remove elements from an array",
          "d) To find the length of an array"
        ],
        "curr_ans": "a) To concatenate two arrays"
      },
      {
        "question": "What is the purpose of the 'Array.prototype.map()' method in JavaScript?",
        "answer": [
          "a) To remove elements from an array",
          "b) To add elements to an array",
          "c) To create a new array by applying a function to each element of the original array",
          "d) To sort an array"
        ],
        "curr_ans": "c) To create a new array by applying a function to each element of the original array"
      }
      
    ]
    
    
    
  ]
}
]
  
  // Example of how to access the data
//   console.log(problemData.prob[0].question); // Output: "What is a DBMS?"
//   console.log(problemData.prob[0].answer[2]); // Output: "c) Database Management System"
//   console.log(problemData.prob[0].curr_ans); // Output: "c) Database Management System"
  
  
  export default Test_set;