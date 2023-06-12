const mysql = require('mysql2');

// MySQL connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '#YH168play',
  database: 'graphqlcrud',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
  } else {
    console.log('Connected to MySQL database');
  }
});


const resolvers = {
    Query: {
        users: () => {
            return new Promise((resolve, reject) => {
                const query = 'SELECT * FROM users';
                db.query(query, (err, results) => {
                    if (err) {
                        console.error('Error executing MySQL query: ', err);
                        reject([]);
                    } else {
                        resolve(results);
                    }
                });
            });
        },
    }
}

module.exports = { resolvers };