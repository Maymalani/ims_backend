const storage = require('node-persist');
const status = require('../model/status');
// const role = require('../model/role');
storage.init( /* options... */);


exports.status = async (req, res) => {
    var status_data = await status.findOne({ name: req.body.name });
    if (status_data) {
        res.status(200).json({
            status: "status is already Exist",
        })
    } else {
        var data = await status.create(req.body);
        res.status(200).json({
            status: "status Insert",
            data
        })
    }
}

exports.status_delete = async (req, res) => {

    var id = req.params.id;
    var data = await status.findByIdAndDelete(id, req.body);
    res.status(200).json({
        status: "status Delete"
    })
}

exports.status_update = async (req, res) => {
    var status_data = await status.findOne({ name: req.body.name });
    if (status_data) {
        res.status(200).json({
            status: "status is already Exist",
        })
    } else {
        var id = req.params.id;
        var data = await status.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            status: "status update",
            data
        })
    }
}
exports.viewstatus_update = async (req, res) => {

    var id = req.params.id;
    var data = await status.findById(id);
    res.status(200).json({
        status: "status update",
        data
    })

}
exports.find_status = async (req, res) => {

    var search = req.query;
    var data = await status.find(search)
    res.status(200).json({
        status: "status find",
        data
    })

}

exports.view_status = async (req, res) => {

    var data = await status.find();
    res.status(200).json({
        status: "status View",
        data
    })

}

