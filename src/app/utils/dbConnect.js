
import mongoose from 'mongoose';

const dbConnect = async () => {
  if (mongoose.connection.readyState === 1) return;

  // Log the MongoDB URI to the console
  console.log('MongoDB URI:', process.env.MONGODB_URI);

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};

export default dbConnect;
