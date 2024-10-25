// src/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },     
  email: { type: String, required: true, unique: true }, 
  password: { type: String, required: true },    
});

// Export the model, checking if it already exists
export default mongoose.models.User || mongoose.model('User', userSchema);
