// mock database connection
function DatabaseConnection (url) {
  console.log(`Connecting to: ${url}`)
  return {
    databaseHelpers: {}
  }
}

/**
 * Singleton database connection example
 * 
 * Using dependency injection also in this example
 * this would make the instance much more flexible and testable 
 */
const databaseConnectionSingleton = (function databaseConnectionSingleton(db, url) {
  let instance
  
  return {
    getInstance: () => {
      if(instance) return instance
      
      instance = new db(url)
      return instance
    }
  }
})(DatabaseConnection, 'http://www.dogs-data.com')

const connection1 = databaseConnectionSingleton.getInstance()
const connection2 = databaseConnectionSingleton.getInstance()

console.log(connection1);
console.log(`Singleton: ${connection1 === connection2}`);
