const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/DoctorHunt')
  .then(() => console.log('DB connected successfully'))
  .catch((err) => console.error('Failed to connect to database', err ));
