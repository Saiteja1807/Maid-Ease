const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./model/User');
const app = express();

app.use(express.json());
app.use(cors(
    {
        credentials: true,
        origin: 'http://localhost:3000'
    }
));

mongoose.connect('mongodb+srv://rushda:8Pk72qVTzT2DWltL@cluster0.cxbkrgr.mongodb.net/?retryWrites=true&w=majority')

const authenticate = async (req, res, next) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, 'your_jwt_secret');
      const user = await User.findById(decoded.id);
  
      if (!user) {
        throw new Error('User not found');
      }
  
      req.user = user;
      next();
    } catch (error) {
      console.error('Error authenticating user:', error);
      res.status(401).json({ message: 'Please authenticate' });
    }
  };

app.post('/register', async (req, res) => {
    // Destructure the request body
    const {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      country,
      zip,
      email,
      phoneNumber,
      password,
    } = req.body;
  
    try {
      // Check if a user with the same email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
      }

          // Generate a salt for hashing the password
    const salt = await bcrypt.genSalt(10);

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create a new user
      const newUser = new User({
        firstName,
        lastName,
        address1,
        address2,
        city,
        state,
        country,
        zip,
        email,
        phoneNumber,
        password: hashedPassword,
      });
  
      // Save the user to the database
      await newUser.save();
  
      // Send a success message
      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: 'Incorrect email or password' });
      }
  
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
  
      if (!isPasswordCorrect) {
        return res.status(401).json({ message: 'Incorrect email or password' });
      }
  
      const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
  
      res.status(200).json({ message: 'Logged in successfully', token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  app.get('/user/profile', authenticate, async (req, res) => {
    try {
      res.status(200).json(req.user);
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  app.put('/user/profile', authenticate, async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.user._id,
        { $set: req.body },
        { new: true, runValidators: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error updating user data:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  app.delete('/user/profile', authenticate, async (req, res) => {
    try {
      await User.findByIdAndDelete(req.user._id);
      res.status(200).json({ message: 'User account deleted' });
    } catch (error) {
      console.error('Error deleting user account:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

app.get('/test', (req, res) => {
  res.send('Hello World!');
});

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
