/**
 * https://www.mongodb.com/docs/manual/reference/connection-string
 * https://mongodb.github.io/node-mongodb-native/3.6/reference/unified-topology
 * http://mongodb.github.io/node-mongodb-native/4.9/classes/MongoClient.html#connect
 * https://mongodb.github.io/node-mongodb-native/4.9/classes/MongoClient.html#db
 * https://mongodb.github.io/node-mongodb-native/4.9/classes/Db.html#collection
 * https://www.mongodb.com/docs/manual/reference/glossary/#std-term-collection
 * http://mongodb.github.io/node-mongodb-native/4.9/classes/Collection.html
 * https://mongodb.github.io/node-mongodb-native/4.9/classes/Collection.html#insertOne
 * https://mongodb.github.io/node-mongodb-native/4.9/classes/Collection.html#find
 * https://mongodb.github.io/node-mongodb-native/4.9/classes/FindCursor.html#forEach
 * https://mongodb.github.io/node-mongodb-native/4.9/classes/MongoClient.html#close
 * https://mongodb.github.io/node-mongodb-native/4.9/modules.html#Callback
 * http://christiankvalheim.com/presentation/how_does_mongodb_store_my_data
 * */

const { MongoClient } = require("../node_modules/mongodb/lib/index");
const task = process.argv[2];

const URI = "mongodb://localhost:27017/";

MongoClient.connect(
  URI,
  {
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) throw err;
    const tasks = client.db("tasklist").collection("tasks");

    if (task) {
      addTask(client, tasks);
    } else {
      listTasks(client, tasks);
    }
  }
);

function addTask(client, tasks) {
  tasks.insertOne(
    {
      task: task,
    },
    (err) => {
      if (err) throw err;
      console.log("New Task: ", task);
      listTasks(client, tasks);
    }
  );
}

function listTasks(client, tasks) {
  tasks.find().forEach(
    (doc) => console.log(doc),
    (err) => {
      if (err) throw err;
      client.close();
      return;
    }
  );
}
