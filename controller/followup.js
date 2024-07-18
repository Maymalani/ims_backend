const storage = require('node-persist');
const followup = require('../model/followup');
// const role = require('../model/role');
storage.init( /* options... */);


exports.followup = async (req,res) =>{
    
        var data = await followup.create(req.body);
        res.status(200).json({
            status:"followup Insert",
            data
         })
     
}

exports.followup_delete  = async  (req,res) =>{
   
    var id = req.params.id;
    var data = await followup.findByIdAndDelete(id,req.body);
    res.status(200).json({
        status:"followup Delete"
    })

}

exports.followup_update = async(req,res) =>{
    
        var id = req.params.id;
        var data = await followup.findByIdAndUpdate(id,req.body);
        res.status(200).json({
            status:"followup update",
            data
        })
    
}
exports.viewfollowup_update = async(req,res) =>{
    
        var id = req.params.id;
        var data = await followup.findById(id);
        res.status(200).json({
            status:"followup update",
            data
        })
    
}
exports.find_followup = async(req,res) =>{

        var search = req.query;
        var data = await followup.find(search);
        res.status(200).json({
            status:"followup find",
            data
        })
    
}

exports.view_followup = async(req,res) =>{
    
        var data = await followup.find().populate({path:'inquiry',populate:[{path:'branch'},{path :'reference'},{path :'status'}]});
        res.status(200).json({
            status:"followup View",
            data
        })
     
}

