const {getAuth} = require("firebase-admin/auth");

const userChecker=async(req,res)=>{
    const {email}=req.body
   getAuth()
    .getUserByEmail(email)
    .then(() => {
      res.status(200).json({msg:true})
    })
    .catch((error) => {
        res.status(200).json({msg:false})
    });
  
  
}

module.exports=userChecker