import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || '';

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log('✅ Connected to MongoDB')
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
  })
  .catch((err) => {
    console.log('❌ Failed to connect to MongoDB:', err)
  })
