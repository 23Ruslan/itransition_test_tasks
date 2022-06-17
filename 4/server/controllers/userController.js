const mysql = require('mysql');

// Connection Pool
const pool = mysql.createPool({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME
});

 //View Users
 exports.view = (req, res) => {
 // Connect to DB
  pool.getConnection((err, connection) => {
    if(err) throw err; // not connected!
    console.log('Connected as ID' + connection.threadId);
    // User the connection
    connection.query('SELECT * FROM user3', (err, rows) => {
        // When done with the connection, release it
        connection.release();

        if(!err) {
            let removedUser = req.query.removed;
            res.render('home', { rows, removedUser });
        } else {
            console.log(err);
        }

       // console.log('The data from user3 table: \n', rows);
    })
  });
}

 // Find User by Search
 exports.find = (req, res) => {
    // Connect to DB
    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected!
        console.log('Connected as ID' + connection.threadId);
        
        let searchTerm = req.body.search;

        // User the connection
        connection.query('SELECT * FROM user3 WHERE first_name LIKE ?', ['%'+searchTerm+'%'], (err, rows) => {
            // When done with the connection, release it
            connection.release();
    
            if(!err) {
                res.render('home', { rows });
            } else {
                console.log(err);
            }
    
          //  console.log('The data from user3 table: \n', rows);
        })
      });
 }

 exports.form = (req, res) => {
    res.render('add-user');
  }
  
  // Add new user
  exports.create = (req, res) => {
    const {first_name, last_name, email, phone, comments} = req.body;
        // Connect to DB
        pool.getConnection((err, connection) => {
            if(err) throw err; // not connected!
            console.log('Connected as ID' + connection.threadId);
            let searchTerm = req.body.search;
    
            // User the connection
            connection.query('INSERT INTO user3 SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments], (err, rows) => {
                // When done with the connection, release it
                connection.release();
        
                if(!err) {
                    res.render('add-user', { alert: 'User added succesfully' });
                } else {
                    console.log(err);
                }
             //   console.log('The data from user3 table: \n', rows);
            })
          });
  } 

// Edit user 
  exports.edit = (req, res) => {
 // Connect to DB
 pool.getConnection((err, connection) => {
    if(err) throw err; // not connected!
    console.log('Connected as ID' + connection.threadId);
    // User the connection
    connection.query('SELECT * FROM user3 WHERE id = ?',[req.params.id], (err, rows) => {
        // When done with the connection, release it
        connection.release();

        if(!err) {
            res.render('edit-user', { rows });
        } else {
            console.log(err);
        }
      //  console.log('The data from user3 table: \n', rows);
    })
  });
  }

// update user 
exports.update = (req, res) => {
    const {first_name, last_name, email, phone, comments} = req.body;
    // Connect to DB
    pool.getConnection((err, connection) => {
       if(err) throw err; // not connected!
       console.log('Connected as ID' + connection.threadId);
       // User the connection
       connection.query('UPDATE user3 SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ? WHERE id = ?',[first_name, last_name, email, phone, comments, req.params.id], (err, rows) => {
           // When done with the connection, release it
           connection.release();
           if(!err) {
            pool.getConnection((err, connection) => {
                if(err) throw err; // not connected!
                console.log('Connected as ID' + connection.threadId);
                // User the connection
                connection.query('SELECT * FROM user3 WHERE id = ?',[req.params.id], (err, rows) => {
                    // When done with the connection, release it
                    connection.release();
                    if(!err) {
                        res.render('edit-user', { rows, alert: `${first_name} has been updated.` });
                    } else {
                        console.log(err);
                    }
                 //   console.log('The data from user3 table: \n', rows);
                })
              });


        } else {
               console.log(err);
           }
         //  console.log('The data from user3 table: \n', rows);
       })
     });
     }

// delete user 
exports.delete = (req, res) => {
// Connect to DB
       pool.getConnection((err, connection) => {
       if(err) throw err; // not connected!
       console.log('Connected as ID' + connection.threadId);
       // User the connection
       if (req.params.id.slice(0,-1) != 'particles.j' && req.params.id.slice(0,-1) != 'favicon.ic' && req.params.id.slice(0,-1) != 'app.j' 
       && req.params.id.slice(0,-1) != 'style.cs')
       connection.query('DELETE FROM user3 WHERE id IN ' + '(' + req.params.id.slice(0,-1) +')', [], (err, rows) => {
           // When done with the connection, release it
           connection.release();
   
           if(!err) {
               res.redirect('/');
           } else {
               console.log(err);
           }
          // console.log('The data from user3 table: \n', rows);
       })
     });
}

 // view Users
 exports.viewall = (req, res) => {
    // Connect to DB
     pool.getConnection((err, connection) => {
       if(err) throw err; // not connected!
       console.log('Connected as ID' + connection.threadId);
       // User the connection
       connection.query('SELECT * FROM user3 WHERE id = ?', [req.params.id], (err, rows) => {
           // When done with the connection, release it
           connection.release();
   
           if(!err) {
               res.render('view-user', { rows });
           } else {
               console.log(err);
           }
   
         //  console.log('The data from user3 table: \n', rows);
       })
     });
   }

// unblock user 
exports.unblock = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected!
        console.log('Connected as ID' + connection.threadId);
        // User the connection
        connection.query('UPDATE user3 SET status = ? WHERE id IN ' + '(' + req.params.id.slice(0,-1) +')', ['active'], (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if(!err) {
                let removedUser = encodeURIComponent('User successfully removed.');
                res.redirect('/?removed='+ removedUser);
            } else {
                console.log(err);
            }
          //  console.log('The data from user3 table: \n', rows);
        })
      });
     }

// block user
exports.block = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected!
        console.log('Connected as ID' + connection.threadId);
        // User the connection
        connection.query('UPDATE user3 SET status = ? WHERE id IN ' + '(' + req.params.id.slice(0,-1) +')', ['blocked'], (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if(!err) {
                let removedUser = encodeURIComponent('User successfully removed.');
                res.redirect('/?removed='+ removedUser);
            } else {
                console.log(err);
            }
            //console.log('The data from user3 table: \n', rows);
        })
      });
     }

// authorization
exports.authorization = (req, res) => {
    // Connect to DB
    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected!
        console.log('Connected as ID' + connection.threadId);
        // User the connection
        connection.query('SELECT * FROM user3 WHERE id = ? AND first_name = ?', [req.params.id, req.params.first_name], (err, rows) => {
            // When done with the connection, release it
            connection.release();
    
            if(!err) {
                res.render('view-user', { rows });
            } else {
                console.log(err);
            }
         //   console.log('The data from user3 table: \n', rows);
        })
      });
     }
     