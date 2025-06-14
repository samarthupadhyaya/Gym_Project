const userServices=require('../../services/User.service');

exports.create=async(req,res)=>{
    try{
        const user=await userServices.create(req.body);
        res.json({data:user},200);
    }catch(err){}
}

exports.list=async(req,res)=>{
    try{
        const user=await userServices.list(req.body);
        res.json({data:user},200);
    }
    catch(err){}
}

exports.show=async(req,res)=>{
    try{
        const user=await userServices.show(req.body);
        res.json({data:user},200);
    }
    catch(err){}
}

exports.update=async(req,res)=>{
    try{
        const user=await userServices.update(req.body);
        res.json({data:user},200);
    }
    catch(err){}
}

exports.delete=async(req,res)=>{
    try{
        const user=await userServices.delete(req.body);
        res.json({data:user},200);
    }
    catch(err){}
}