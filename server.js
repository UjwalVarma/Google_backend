const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const candidateRoutes = require('./routes/candidateRoutes');
const config = require('./config/config');
const errorHandler = require('./middlewares/errorHandler'); // Import error handler middleware

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', candidateRoutes); // Use '/api' prefix for candidateRoutes

// MongoDB Connection
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    // Start server after successful MongoDB connection
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  })
  .catch((error) => {
    console.error('Connection error', error.message);
  });

// Error handling middleware (must be the last middleware)
app.use(errorHandler);
