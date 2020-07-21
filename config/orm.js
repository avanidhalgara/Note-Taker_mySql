// var connection = require("./connection.js");

// class ORM  {
//     constructor(connection){
//       this.connection = connection
//     }
//   // made method for ? if type = column use ?? or if its value use ? and push it in array
//     printQuestionMarks(numberOfValuesOrColumns, type){
//       const questionMarks = [];
  
//       for (var i = 0; i < numberOfValuesOrColumns; i++) {
//         if(type === 'cols'){
//           questionMarks.push("??");
//         } else {
//           questionMarks.push("?")
//         } 
//       }
//       return questionMarks.join(', ');
//     }
//     create(table, columns, values) {
//         const queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES (${this.printQuestionMarks(values.length, 'vals')})`;
    
//         return this.connection.query(queryString, [table, ...values])
//       }
    
//       delete(table, cols, value){
//         const queryString = 'DELETE FROM ?? WHERE ??=?';
    
//         return this.connection.query(queryString, [table, cols, value])
//       }
//     };
//     module.exports = new ORM(connection)
    
    

