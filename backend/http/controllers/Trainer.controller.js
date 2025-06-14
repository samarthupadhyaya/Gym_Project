const trainerservice=require('../../services/Trainer.service');

exports.list=async(req,res)=>{
    try{
        const trainers=await trainerservice.list(req.body);
        res.json({data:trainers},200);
    }
    catch(err){}
}
exports.create=async(req,res)=>{
    try{
        const trainers=await trainerservice.create(req.body);
        res.json({data:trainers},200);
    }
    catch(err){}
}
exports.update=async(req,res)=>{
    try{
        const trainers=await trainerservice.update(req.body);
        res.json({data:trainers},200);
    }
    catch(err){}
}
exports.delete=async(req,res)=>{
    try{
        const trainers=await trainerservice.delete(req.body);
        res.json({data:trainers},200);
    }
    catch(err){}
}
exports.show=async(req,res)=>{
    try{
        const trainers=await trainerservice.show(req.body);
        res.json({data:trainers},200);
    }
    catch(err){}
}