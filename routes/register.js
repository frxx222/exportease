const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

// In-memory storage for users
const users = [];

// Registration Route
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Simple validation
    if (!username || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check if user exists
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
        id: users.length + 1,
        username,
        email,
        password: hashedPassword
    };

    users.push(newUser);

    res.status(201).json({ msg: 'User registered successfully', user: newUser });
});

module.exports = router;
