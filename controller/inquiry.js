const storage = require('node-persist');
const inquiry = require('../model/inquiry')
storage.init( /* options... */);
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cdmisrushti20@gmail.com',
      pass: 'gtno pqgq zukf hinm'
    }
  });
  function randomotp(){
    return Math.floor(100000 + Math.random() * 900000);
  }
exports.inquiry = async (req,res) =>{

        const otp =  randomotp();

        var mailOptions = {
          from: 'cdmisrushti20@gmail.com',
          to: req.body.email,
          subject: 'Sending Email using Node.js',
          text: 'That was easy! '+otp
        };
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        })
        await storage.setItem('otp', otp);
        
      
        var data = await inquiry.create(req.body);
        res.status(200).json({
            status:" Insert inquiry",
            data
         })
         await storage.setItem('id', data._id.toString());


};

exports.verifyOTP = async (req, res) => {
  const { otp } = req.body;

  var id = await storage.getItem('id');
   const storedOTP = await storage.getItem('otp');

   if (storedOTP && storedOTP === otp) {
     
       const updatedInquiry = await inquiry.findByIdAndUpdate(id ,{verify : true});

            
            await storage.clear();

            res.status(200).json({
                status: "Inquiry Verified",
                data: updatedInquiry
            });
   } else {
       res.status(400).json({ 
        status: 'Invalid OTP. Inquiry creation failed.'
      });
    };
}

exports.inquiry_delete  = async  (req,res) =>{
   
    var id = req.params.id;
    var data = await inquiry.findByIdAndDelete(id,req.body);
    res.status(200).json({
        status:"inquiry Delete"
    })
 
}

exports.inquiry_update = async(req,res) =>{
    
        var id = req.params.id;
        var data = await inquiry.findByIdAndUpdate(id,req.body);
        res.status(200).json({
            status:"inquiry update",
            data
        })
    
}
exports.viewinquiry_update = async(req,res) =>{
    
        var id = req.params.id;
        var data = await inquiry.findById(id);
        res.status(200).json({
            status:"inquiry update",
            data
        })
    
}
exports.find_inquiry = async(req,res) =>{
    
        var search = req.query;

        Object.keys(search).forEach(key => {
          if(search[key] === ""){
            delete search[key]
          }
        })
        var data = await inquiry.find(search).populate('branch').populate('reference').populate({path:'inquiry_by',populate:[{path:'role'},{path:'branch'}]}).populate('status');
        res.status(200).json({
            status:"inquiry find",
            data
        })
     
}

exports.view_inquiry = async(req,res) =>{
    
        var data = await inquiry.find().populate('branch').populate('reference').populate({path:'inquiry_by',populate:[{path:'role'},{path:'branch'}]}).populate('status');
        res.status(200).json({
            status:"inquiry View",
            data
        })
    
}

