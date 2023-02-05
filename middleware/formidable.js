const formidable = require('formidable');



const sendImage = async (req, res, next) => {
    const form = await formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ fields, files });
    });
};

module.exports = sendImage