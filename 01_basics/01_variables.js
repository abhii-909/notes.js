const accountId = 144553
let accountEmail = "abbhinav@google.com"
var accountPassword = "12345"
accountCity = "Kanpur"
let accountState;

// accountId = 2 NOT ALLOWED

accountEmail = "hc@xh.com"
accountPassword = "2334353454"
accountCity = "bengal"

console.log(accountId);

/*
Prefer not to use var cuz of the issue in scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])