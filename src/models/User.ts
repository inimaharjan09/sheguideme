import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // accountType: String,
  travelerInfo: {
    userName: String,
    contactNumber: String,
    alternateEmail: String,
    availableDaysTime: Date,
    preferredContactTime: String,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
