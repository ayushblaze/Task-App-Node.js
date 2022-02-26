// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if(error) {
    return console.log('Database connection failed!')
  }
  
  const db = client.db(databaseName)

  // const updatePromise = db.collection('users').updateOne({
  //   _id: ObjectID("620b847efeea8e3114500501")
  // }, {
  //   $set: {
  //     name: 'ayushblaze'
  //   }
  // })

  // db.collection('users').deleteMany({
  //   age: 17
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  db.collection('tasks').deleteOne({
    description: 'Cycling'
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })
})