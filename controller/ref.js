const storage = require('node-persist');
const reference = require('../model/ref');
// const role = require('../model/role');
storage.init( /* options... */);


exports.reference = async (req,res) =>{
    var ref_data = await reference.findOne({name:req.body.name});
    if(ref_data){
        res.status(200).json({
            status:"reference is already Exist",
        })
    }else{
        var data = await reference.create(req.body);
        res.status(200).json({
            status:"reference Insert",
            data
         })
    }
}

exports.reference_delete  = async  (req,res) =>{
   
    var id = req.params.id;
    var data = await reference.findByIdAndDelete(id,req.body);
    res.status(200).json({
        status:"reference Delete"
    })
 
}

exports.reference_update = async(req,res) =>{
    
    var ref_data = await reference.findOne({name:req.body.name});
    if(ref_data){
        res.status(200).json({
            status:"reference is already Exist",
        })
    }else{
        var id = req.params.id;
        var data = await reference.findByIdAndUpdate(id,req.body);
        res.status(200).json({
            status:"reference update",
            data
        })
    }
        
    
}
exports.viewreference_update = async(req,res) =>{
    
        var id = req.params.id;
        var data = await reference.findById(id);
        res.status(200).json({
            status:"reference update",
            data
        })
    
}

exports.find_reference = async(req,res) =>{
    
        var search = req.query;
        var data = await reference.find(search)
        res.status(200).json({
            status:"reference find",
            data
        })
    
}

exports.view_reference = async(req,res) =>{
    
        var data = await reference.find();
        res.status(200).json({
            status:"reference View",
            data
        })
    
}

