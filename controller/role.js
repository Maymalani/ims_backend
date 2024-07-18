const storage = require('node-persist');
const role = require('../model/role');
storage.init( /* options... */)

exports.add_role = async (req,res) =>{
    console.log(req.body);
    var role_data = await role.findOne({name:req.body.name});
    if(role_data){
        res.status(200).json({
            status:"role is already Exist",
        })
    }else{
        var data = await role.create(req.body);
        res.status(200).json({
            status:"add role",
            data
        })
    }
    
}
exports.role_delete  = async  (req,res) =>{
    
     var id = req.params.id;
     var data = await role.findByIdAndDelete(id,req.body);
     res.status(200).json({
         status:"role Delete"
     })
  
 }
 
 exports.role_update = async(req,res) =>{
    var role_data = await role.findOne({name:req.body.name});
    if(role_data){
        res.status(200).json({
            status:"role is already Exist",
        })
    }else{
         var id = req.params.id;
         var data = await role.findByIdAndUpdate(id,req.body);
         res.status(200).json({
             status:"role update",
             data
         })
        }
 }
 exports.viewrole_update = async(req,res) =>{
 
        var id = req.params.id;
        var data = await role.findById(id);
        res.status(200).json({
            status:"role update",
            data
        })
    
}
 exports.find_role = async(req,res) =>{
     
         var search = req.query;
         var data = await role.find(search)
         res.status(200).json({
             status:"role find",
             data
         })

 }
 
 exports.view_role = async(req,res) =>{
     
         var data = await role.find();
         res.status(200).json({
             status:"role View",
             data
         })
     
 }
 