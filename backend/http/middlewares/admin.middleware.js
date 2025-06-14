module.exports=(req,res,next)=>{
    if(req.user.user_type!='admin'){
        res.json({
            error:'sorry, you dont have permission to access this route'
        })
    }
    next();
}