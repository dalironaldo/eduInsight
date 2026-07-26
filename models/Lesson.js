
import mongoose from 'mongoose';
const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String }, // HTML ou Markdown
  pdfUrl: { type: String },
  videoUrl: { type: String },
  order: { type: Number, default: 0 },
  module: { type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: true }
}, { timestamps: true });

export const Lesson = mongoose.model('Lesson', lessonSchema);


