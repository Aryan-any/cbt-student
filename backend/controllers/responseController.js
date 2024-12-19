const Response = require('../models/Response');

exports.saveResponse = async (req, res) => {
    try {
        const { userId, questionId, answer } = req.body;
        const response = await Response.findOneAndUpdate(
            { userId, questionId },
            { answer },
            { upsert: true, new: true }
        );
        res.json(response);
    } catch (err) {
        res.status(500).send('Failed to save response');
    }
};

exports.submitResponses = async (req, res) => {
    try {
        const { userId } = req.body;
        const responses = await Response.find({ userId });
        res.json({ responses, message: 'Test submitted successfully' });
    } catch (err) {
        res.status(500).send('Failed to submit test');
    }
};
