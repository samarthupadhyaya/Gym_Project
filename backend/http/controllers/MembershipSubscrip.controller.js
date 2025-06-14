const MemberSubscription_services=require('../../services/MembershipSubscription.service');

exports.list=async(req,res)=>{
    try{
        const member=MemberSubscription_services.list(req.body);
        res.json({data:member},200);
    }
    catch(err){}
}
exports.create=async(req,res)=>{
    try{
        const member=MemberSubscription_services.create(req.body);
        res.json({data:member},200);
    }
    catch(err){}
}
exports.show=async(req,res)=>{
    try{
        const member=MemberSubscription_services.show(req.body);
        res.json({data:member},200);
    }
    catch(err){}
}
exports.update=async(req,res)=>{
    try{
        const member=MemberSubscription_services.update(req.body);
        res.json({data:member},200);
    }
    catch(err){}
}
exports.delete=async(req,res)=>{
    try{
        const member=MemberSubscription_services.delete(req.body);
        res.json({data:member},200);
    }
    catch(err){}
}