const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please enter the name of the Doctor',
    trim: true
  },
  slug: String,
  hospital: String,
  department: String,
  gender: String,
  votes: Number
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;