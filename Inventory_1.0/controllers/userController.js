const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const User = require('../models/user.model'); // Assuming you have a User model

exports.registerUser = async (req, res) => {
  try {
    // Extract user input from the request body
    const { username, password, email } = req.body;

    // Check if the username or email is already taken
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email is already taken' });
    }

    // Hash the password before saving it to the database
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user based on the User schema
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      // Add other user properties here
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Omit the hashed password from the response for security
    const userWithoutPassword = savedUser.toObject();
    delete userWithoutPassword.password;

    res.status(201).json({ message: 'User registered successfully', user: userWithoutPassword });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
};
