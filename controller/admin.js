const storage = require('node-persist');
// const role = require('../model/role');
storage.init( /* options... */)
const bcrypt = require('bcryptjs');
const admin = require('../model/admin');
var jwt = require('jsonwebtoken');

exports.add_admin = async (req, res) => {
  var b_pass = await bcrypt.hash(req.body.password, 10);
  req.body.password = b_pass;

  req.body.image = req.file.originalname;

  var data = await admin.create(req.body);
  const token = jwt.sign({ admin_email: data.admin_email }, process.env.SEC_KEY);
  res.status(200).json({
    status: "Admin Insert",
    data,
    token
  })
}

exports.admin_delete = async (req, res) => {

  var id = req.params.id;
  var data = await admin.findByIdAndDelete(id, req.body);
  res.status(200).json({
    status: "Admin Delete"
  })

}

exports.admin_psw_change = async (req, res) => {
  var id = req.params.id
  var psw = req.body.password;
  psw = await bcrypt.hash(psw, 10);
  var data = await admin.findByIdAndUpdate(id, { $set: { password: psw } });
  res.status(200).json({ status: "Password Updated Successfully" });
}

exports.admin_update = async (req, res) => {

  var id = req.params.id;
  req.body.password = await bcrypt.hash(req.body.password, 10);
  var data = await admin.findByIdAndUpdate(id, req.body);

  res.status(200).json({
    data,
    status: "data-updated.....!",
  });

};

exports.admin_update_img = async (req, res) => {
  var id = req.params.id;
  req.body.image = req.file.originalname;
  var data = await admin.findByIdAndUpdate(id, { $set: { image: req.body.image } })
  res.status(200).json({
    status: "Image Updated"
  })
}

exports.admin_delete_img = async (req, res) => {
  var id = req.params.id;
  var data = await admin.findByIdAndUpdate(id, { $set: { image: "" } });
  res.status(200).json({
    status: "Imaged Deleted"
  })
}

exports.viewadmin_update = async (req, res) => {

  var id = req.params.id;
  var data = await admin.findById(id).populate('role').populate('branch');
  res.status(200).json({
    status: "Admin update",
    data
  })

}

exports.logoutadmin = async (req, res) => {
  await storage.clear('admin-login');
  res.status(200).json({
    status: " logout "
  })
}

exports.view_admin = async (req, res) => {

  var data = await admin.find().populate('role').populate('branch');
  res.status(200).json({
    status: "Admin View",
    data
  })

}

exports.admin_login = async (req, res) => {
  var status = await storage.getItem("admin-login");

  if (status == undefined) {
    // var name = await admin.find({ name: req.body.name });
    var email = await admin.findOne({ admin_email: req.body.admin_email });

    if (email) {
      bcrypt.compare(
        req.body.password,
        email.password,
        async function (err, result) {
          if (result == true) {
            await storage.setItem(' -login', email.id);
            const token = jwt.sign({ admin_email: email.admin_email }, process.env.SEC_KEY);
            res.status(200).json({
              status: 200,
              message: "login success",
              token,
              data: email
            });
          } else {
            res.status(400).json({
              status: 400,
              message: "Check Your Email and Password(1)",
            });
          }
        }
      );
    } else {
      res.status(400).json({
        status: 400,
        message: "Check Your Email and Password(2)",
      });
    }
  } else {
    res.status(200).json({
      status: 200,
      message: "admin is already login",
    });
  }

};
exports.find_admin = async (req, res) => {

  var search = req.query;
  var data = await admin.find(search)
  res.status(200).json({
    status: "Admin find",
    data
  })
}

exports.admin = async (req, res) => {
  const userData = req.user;
  res.status(200).json(userData);
}