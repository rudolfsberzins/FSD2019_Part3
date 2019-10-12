const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://FSD_db_user:${password}@fsd2019-ckhe4.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url, {
  useNewUrlParser: true
})

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'This will be the best',
//   date: new Date(),
//   important: true
// })

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

// note.save().then(response => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })