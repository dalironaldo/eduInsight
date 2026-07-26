import mongoose from 'mongoose';
const recommendationSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  type: { type: String },
  confidenceScore: { type: Number, default: 0 }
}, { timestamps: true });

export const Recommendation = mongoose.model('Recommendation', recommendationSchema);

