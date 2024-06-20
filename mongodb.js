const { MongoClient } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

//InsertOne
// MongoClient.connect(connectionURL, {})
//     .then((client) => {
//         const db = client.db(databaseName);
//         const userDB=db.collection('users');
//         userDB.insertOne(
//             {
//                 'name': 'subash',
//                 'age': 21
//             }
//         )
//     }).catch(err => console.log('Unable to connect to Server!', err));

//InsertMany
// MongoClient.connect(connectionURL, {})
//     .then((client) => {
//         const db = client.db(databaseName);
//         db.collection('users').insertMany([
//             {
//                 'name': 'ganesh',
//                 'age': 25
//             },{
//                 'name': 'mani',
//                 'age': 15
//             }
//         ]    
//         )
//     }).catch(err => console.log('Unable to connect to Server!', err));

// MongoClient.connect(connectionURL, {})
//     .then((client) => {
//         const db = client.db(databaseName);
//         const taskDB=db.collection('tasks');
//         taskDB.insertMany([
//             {
//                 'description': 'Task-1',
//                 'status':'completed'
//             },{
//                 'description': 'Task-2',
//                 'status':'Not completed'
//             },{
//                 'description': 'Task-3',
//                 'status':'completed'
//             }
//         ]    
//         )
//     }).catch(err => console.log('Unable to connect to Server!', err));

// ReadOneDocument
// MongoClient.connect(connectionURL, {})
//     .then((client) => {
//         const db = client.db(databaseName);
//         const userDB = db.collection('users');
//         const user = userDB.findOne({ 'name': 'subash' }).then(res => {
//             console.log(res);
//         }).catch(err => {
//             console.log(err)
//         })
//     }).catch(err => console.log('Unable to connect to Server!', err));

// UpdateOne Document
// MongoClient.connect(connectionURL, {})
//     .then((client) => {
//         const db = client.db(databaseName);
//         const userDB = db.collection('users');
//         const user = userDB.updateOne({ 'name': 'subash' },{$set:{'name':'kamesh'}});
//         user.then(res => {
//             console.log(res);
//         }).catch(err => {
//             console.log(err)
//         })
//     }).catch(err => console.log('Unable to connect to Server!', err));


// UpdateMany Document
// MongoClient.connect(connectionURL, {})
//     .then((client) => {
//         const db = client.db(databaseName);
//         const userDB = db.collection('users');
//         const user = userDB.updateMany({ 'name': 'subash' },{$set:{'name':'kamesh'}});
//         user.then(res => {
//             console.log(res);
//         }).catch(err => {
//             console.log(err)
//         })
//     }).catch(err => console.log('Unable to connect to Server!', err));

// DeleteOne
// MongoClient.connect(connectionURL, {})
//     .then((client) => {
//         const db = client.db(databaseName);
//         const userDB = db.collection('users');
//         const user = userDB.deleteOne({ 'name': 'subash' });
//         user.then(res => {
//             console.log(res);
//         }).catch(err => {
//             console.log(err)
//         })
//     }).catch(err => console.log('Unable to connect to Server!', err));

// DeleteMany
MongoClient.connect(connectionURL, {})
    .then((client) => {
        const db = client.db(databaseName);
        const userDB = db.collection('users');
        const user = userDB.deleteMany({ 'name': 'kamesh' });
        user.then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err)
        })
    }).catch(err => console.log('Unable to connect to Server!', err));