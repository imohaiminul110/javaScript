const { MongoClient } = require ('mongodb') 

let dbConnection
/*import mongo client from mongodb driver package

  MongoClient is goona allow to connect to a database
*/


/**
 * there will have 2 functions
 * one function to initially connect to database
 * and one function to retrieve that database connection once we already have connected to it
 * 
 * and both of this function are going to be exported from this file so we can use in other js file
 */
module.exports=
{
    // this function will initially connect to database / establish the connection with this function
    connectToDb: () => {
        MongoClient.connect('mongodb://localhost:27017/bookstore')
        .then((client) => 
        {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => 
            {
                console.log(err)
                return cb (err)
            })
    }, 


    getDb: () => dbConnection// this function will ultimately return our database connection after being connected / it will allow us to communicate with database / return that connection to database using 
}