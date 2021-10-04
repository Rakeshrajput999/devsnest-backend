const check =(req,res,next)=>{
    if(req.session.User.role === "Super-admin"){
        next()
    }else{
        res.status(401).send("you are nnot a super admin")
    }
}
module.exports =check