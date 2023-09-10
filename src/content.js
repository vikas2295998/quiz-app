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



const Test_set= {
    poblemset1:{
    title:"DBMS MCQ TEST",
    prob: [
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
}
  };
  
  // Example of how to access the data
//   console.log(problemData.prob[0].question); // Output: "What is a DBMS?"
//   console.log(problemData.prob[0].answer[2]); // Output: "c) Database Management System"
//   console.log(problemData.prob[0].curr_ans); // Output: "c) Database Management System"
  
  
  export default Test_set;