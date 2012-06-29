var http = require("http");

function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");

// var
//   mongo = require('/usr/local/Cellar/mongodb/2.0.4-x86_64/node_modules/mongodb/lib/mongodb'),
//   Server = mongo.Server,
//   Db = mongo.Db;
//   
// 
// 
// var client = new Db('test', new Server('127.0.0.1', 27017, {}));
// 
// var insertData = function(err, collection) {
// collection.insert({name: "Kristiono Setyadi"});
// collection.insert({name: "Meghan Gill"});
// collection.insert({name: "Spiderman"});
// }
// 
// var removeData = function(err, collection) {
// collection.remove({name: "Spiderman"});
// }
// 
// var updateData = function(err, collection) {
// collection.update({name: "Kristiono Setyadi"}, {name: "Kristiono Setyadi", sex: "Male"});
// }
// 
// var listAllData = function(err, collection) {
// collection.find().toArray(function(err, results) {
// console.log(results);
// });
// }
// 
// var findName = function(err, collection) {
// console.log("Find Name...");
// collection.find({name: "Kristiono Setyadi"}).toArray(function(err, results) {
// console.log(results);
// });
// }
// 
// client.open(function(err, pClient) {
// client.collection('test_insert', insertData);
// 
// client.collection('test_insert', removeData);
// 
// client.collection('test_insert', updateData);
// 
// client.collection('test_insert', listAllData);
// 
// client.collection('test_insert', findName);
// });
