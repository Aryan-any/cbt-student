const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    options: [String],
    correctAnswer: Number,
    subject: String,
    status: { type: String, default: 'not-answered' },
});

module.exports = mongoose.model('Question', QuestionSchema);
