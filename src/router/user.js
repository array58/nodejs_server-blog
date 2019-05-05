const {login} = require('../controller/user');
const {SuccessModel,ErrorModel} = require('../model/resModel')
const handleUser = (req,res)=>{
    const method = req.method;
  
    if("POST"===method && req.path === "/api/blog/login"){
        const { username,password} = req.body;
        const result = login( username , password ) ;
        if(result){
            return new SuccessModel()
        }else{
            return new ErrorModel()
        }
       
    }
}
module.exports = handleUser;