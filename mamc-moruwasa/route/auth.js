const express = require('express');
const TOKEN = "JLKJLAJFLAJLAAL";
// const AdminController = require("../controllers/admin");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require('../Model/User');
const { registrationValidation, loginValidation } = require('../db/validitation');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
	const { error } = registrationValidation(req.body);

	if (error) return res.status(400).send(error.details[0].message);

	const meterExist = await User.findOne({ username: req.body.username });
	if (meterExist) return res.status(400).send('meter already exists');

	//HASH PASSWORD
	const salt = await bcrypt.genSalt(10);
	const hashMeterNO = await bcrypt.hash(req.body.meterNo, salt);

	const user = new User({
		username: req.body.username,
		
		phonenumber: req.body.phonenumber,
		meterNo:hashMeterNO,
		
	});

	try {
    const userSave = await user.save();
    //choose to return just id of the saved user
		res.send({ user: user._id });
	} catch (err) {
		res.status(404).send(err);
		
	}
});

router.post('/login', async (req, res) => {
  //validate data before we use
	const { error } = loginValidation(req.body);

  if (error) return res.status(400).send(error);
  
  //check if user exists
  const user= await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send('Meter or username not exist');
  
  //PASSWORD IS CORRECT

  const validPassword = await bcrypt.compare(req.body.meterNo,user.meterNo);

  if(!validPassword) return res.status(400).send("Meter or UserName  not exist");



  //create and assign the token

  const token = jwt.sign({_id:user.__id},TOKEN);

  res.header("auth_token",token).send({
	  "auth_token":token
  });

  // res.send("Log in ");
});

module.exports = router;


//7864drftgh4536cxvds33
