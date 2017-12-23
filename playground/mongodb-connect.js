//const MongoClient = require('mongodb').MongoClient;
//distructure property
const {MongoClient, ObjectID} = require('mongodb');
//var objid = new ObjectID();
//console.log(objid);
MongoClient.connect('mongodb://localhost:27017/test', (err,db)=> {

if(err)
{
    return console.log('unable to connect to mongodb database');
}
console.log('connected to mongo db server');
/*
db.collection('toDos').insertOne({
text : 'somthing to do ',
completed : 'false'
} , (err, result) => {
if(err)
{
  return  console.log('unable to insert todo', err);
}
console.log(JSON.stringify(result.ops , undefined ,2));
}); */

db.collection('User').insertOne({
    //_id:1234,
    Name : 'Rahul Saini',
    age : 22,
    location : 'noida'
    } , (err, result) => {
    if(err)
    {
      return  console.log('unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp() , undefined ,2));
    })


db.close();
}  );