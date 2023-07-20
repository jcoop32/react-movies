const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://jcoop32:8YGY0V4RsqjDGRI3@cluster0.5qrhgfd.mongodb.net/react-movies?retryWrites=true&w=majority',
);

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
