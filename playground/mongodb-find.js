//const MongoClient = require('mongodb').MongoClient;
//distructure property
const {MongoClient, ObjectID} = require('mongodb');
//var objid = new ObjectID();
//console.log(objid);
MongoClient.connect('mongodb://localhost:27017/test', (err, db) =>{
if(err){
   return console.log("getting error");
}
console.log('connecting to mongodb server ');

/*
db.collection('User').find({_id : new ObjectID('5a3e44da79fcd836b24a1c3e')}).toArray().then((docs) =>{
    console.log('todos');
    console.log(JSON.stringify(docs, undefined , 2));

  }, (err) => {

    if(err)
    {
        console.log('getting error', err);
    } })  */
    db.collection('User').find({ Name : "Rahul Saini"}).toArray().then((docs) =>{
        console.log(JSON.stringify(docs, undefined, 2)) } );
//db.close();
}  ); 
