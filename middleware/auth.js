var jwt = require('jsonwebtoken');
var Admin = require('../model/admin')

exports.check_token = async (req, res, next) => {
    jwt.verify(req.headers.authorization, "IMS");
    next();
}

exports.adminMiddleWare = async (req, res, next) => {
    var token = req.header('Authorization');

    if (!token) {
        return res.status(400).json({ message: "Unauthorised HTTP ! Token Not Provided" });
    }

    try {
        const isVerified = jwt.verify(token, process.env.SEC_KEY);
        if (isVerified) {
            const userData = await Admin.find({ admin_email: isVerified.admin_email });

            req.user = userData;
            token = token;
            req.userId = userData._id
        }
    } catch (error) {
        return res.status(500).json({ error })
    }
    next();
};