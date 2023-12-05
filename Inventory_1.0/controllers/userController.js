const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const User = require('../models/user.model'); // Assuming you have a User model
const mongoose = require('mongoose');




exports.home = async(req,res)=>{
  res.send(" this is home controller")
}




exports.registerUser = async (req, res) => {
  try {
    // Extract user input from the request body
    
   const { username, password, email, role, department, fullName, phoneNumber, address } = req.body;
   console.log("3");

    // Check if the username or email is already taken
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email is already taken' });
    }

    // Hash the password before saving it to the database
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("4");
    // Create a new user based on the User schema
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      role,
      department,
      fullName,
      phoneNumber,
      address
      // Add other user properties here
    });
    console.log("5");
    // Save the new user to the database
    const savedUser = await newUser.save();
    console.log("6");
    // Omit the hashed password from the response for security
    const userWithoutPassword = savedUser.toObject();
    delete userWithoutPassword.password;

    res.status(201).json({ message: 'User registered successfully', user: userWithoutPassword });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
};


exports.loginUser = async(req,res) => {
    try {
      // Extract username and password from the request body
      const { username, password } = req.body;
  
      // Check if the user exists
      const user = await User.findOne({ username });
  
      // If the user doesn't exist, return an error
      if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      // If passwords don't match, return an error
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      // If the user is not approved, you may want to handle this based on your requirements
      if (!user.isApproved) {
        return res.status(401).json({ error: 'User is not approved' });
      }
  
      // If authentication is successful, you can send a success message or user data
      res.json({ message: 'Login successful', user: { username: user.username, fullName: user.fullName } });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

