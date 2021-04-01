// CRUD

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) =>{
    if (error) {
        return console.log('Unable to connect to DB');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Denis',
    //     age: 39
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert');
    //     }

    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 21
    //     }, {
    //         name: 'Gunther',
    //         age: 43
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to Insert');
    //     }
    //     console.log(result.ops);
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Go to the shop',
    //         completed: true
    //     }, {
    //         description: 'Clean the room',
    //         completed: false
    //     }, {
    //         description: 'Eat a bannana',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert');
    //     }

    //     console.log(result.ops);
    // })


    
});