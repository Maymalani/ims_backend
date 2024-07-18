const storage = require('node-persist');
const branch = require('../model/branch');
// const role = require('../model/role');
storage.init( /* options... */);


exports.branch = async (req,res) =>{
    var branch_data = await branch.findOne({name:req.body.name});
    if(branch_data){
        res.status(200).json({
            status:"branch is already Exist",
        })
    }else{
        var data = await branch.create(req.body);
        res.status(200).json({
            status:"Brach Insert",
            data
         })
    }
}

exports.branch_delete  = async  (req,res) =>{
   
    var id = req.params.id;
    var data = await branch.findByIdAndDelete(id,req.body);
    res.status(200).json({
        status:"branch Delete"
    })


}

exports.branch_update = async(req,res) =>{
    
    var branch_data = await branch.findOne({name:req.body.name});
    if(branch_data){
        res.status(200).json({
            status:"branch is already Exist",
        })
    }else{
        var id = req.params.id;
        var data = await branch.findByIdAndUpdate(id,req.body);
        res.status(200).json({
            status:"branch update",
            data
        })
    }
        
    
}
exports.viewbranch_update = async(req,res) =>{
    

        var id = req.params.id;
        var data = await branch.findById(id);
        res.status(200).json({
            status:"branch update",
            data
        })
        
}
exports.find_branch = async(req,res) =>{
    
        var search = req.query;
        var data = await branch.find(search)
        res.status(200).json({
            status:"branch find",
            data
        })
    
        
    
}

exports.view_branch = async(req,res) =>{

        var data = await branch.find();
        res.status(200).json({
            status:"branch View",
            data
        })
}

