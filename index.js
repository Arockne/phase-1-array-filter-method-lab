//implement findMathcing
  //passes in an array of drivers names
  //passes in a string
  //returns an array of the matching list of drivers
function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

//implement fuzzyMatch
  //passes in an array of drivers names
  //passes in a string to match
  //returns all drivers whose name begin with the provided letters
function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.slice(0, string.length).toLowerCase() === string.toLowerCase());
}

//implement matchName
  //takes in an array of driver objects
  //passes in a string
  //each driver object has two properties
    //name
    //hometown
  //return each element whose name matches the string argument
function matchName(drivers, string) {
  return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
}