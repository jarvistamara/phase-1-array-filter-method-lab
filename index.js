// Code your solution here
function findMatching(driver, match) {
    return driver.filter( nameMatch =>
        nameMatch.toLowerCase() === match.toLowerCase()
    )
  }
  
  function fuzzyMatch(driver, testString) {
    return driver.filter( nameMatch =>
        nameMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
  function matchName(driver, matchName) {
    return driver.filter( record => record.name === matchName)
  }