const storage = require('node-persist');
const course = require('../model/course');
// const role = require('../model/role');
storage.init( /* options... */);


exports.course = async (req,res) =>{
    var course_data = await course.findOne({name:req.body.name});
    if(course_data){
        res.status(200).json({
            status:"course is already Exist",
        })
    }else{
        var data = await course.create(req.body);
        res.status(200).json({
            status:"course Insert",
            data
         })
    }
}

exports.course_delete  = async  (req,res) =>{

    var id = req.params.id;
    var data = await course.findByIdAndDelete(id,req.body);
    res.status(200).json({
        status:"course Delete"
    })
}

exports.course_update = async(req,res) =>{
    var course_data = await course.findOne({name:req.body.name});
    if(course_data){
        res.status(200).json({
            status:"course is already Exist",
        })
    }else{
        var id = req.params.id;
        var data = await course.findByIdAndUpdate(id,req.body);
        res.status(200).json({
            status:"course update",
            data
        })
    }
}
exports.viewcourse_update = async(req,res) =>{

        var id = req.params.id;
        var data = await course.findById(id);
        res.status(200).json({
            status:"course update",
            data
        })
     
}
exports.find_course = async(req,res) =>{
    
        var search = req.query;
        var data = await course.find(search)
        res.status(200).json({
            status:"course find",
            data
        })
}

exports.view_course = async(req,res) =>{
    
        var data = await course.find();
        res.status(200).json({
            status:"Course View",
            data
        })
    
}

