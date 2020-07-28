// Import Mongo connection packages
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const {ObjectId} = require('mongodb');

// Setup Database Object
const url = process.env.DB_URL;
const db_name = process.env.DB_NAME;
const col_name = process.env.COL_NAME;
const options = {
    useUnifiedTopology: true
};

// Read all Entrees or just one
const readEntrees = (id = '') => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);

            const db = client.db(db_name);
            const collection = db.collection(col_name);
            if (id === '') {
                collection.find({}).toArray((err, docs) => {
                    assert.equal(err, null);
                    resolve(docs);
                    client.close();
                })
            } else {
                collection.findOne({_id: new ObjectId(id)}, (err, doc) => {
                    assert.equal(err, null);
                    resolve(doc);
                    client.close();
                });
            }
        })
    });
    return iou;
}

// Create a new Entree
const createEntree = (entree) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);

            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.insertOne(entree, (err, result) => {
                assert.equal(err, null);
                resolve(result.ops);
                client.close();
            })
        })
    });
    return iou;
}

// Export CRUD functions
module.exports = {
    readEntrees,
    createEntree
}