const Doctor = require('../models/Doctor');

exports.homePage = async (req, res) => {
  const doctors = await Doctor.find();
  // res.json(doctors);
  res.render('index', {title: 'Home', doctors});
}

exports.singleDoc = (req, res) => {
  res.render('single', {title: 'Doctor Name'});
}

exports.addDoctor = (req, res) => {
  // res.send('It works');
  res.render('addDoctor', {title: 'Add New Doctor'});
};

exports.createDoctor = async (req, res) => {
  const doctor = new Doctor(req.body);
  doctor.votes = 0;
  await doctor.save();
  req.flash('success', 'Doctor Added Successfully!');
  res.redirect('/');
}

exports.upVote = async (req, res) => {
  let doctor = await Doctor.findOne({_id: req.params.id});
  let addVote = doctor.votes + 1;
  doctor = await Doctor.findByIdAndUpdate(req.params.id, { votes: addVote });
  req.flash('success', 'Thank you for the Upvote. It means a lot');
  res.redirect('/');
}