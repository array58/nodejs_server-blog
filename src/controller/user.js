const login = (username,password)=>{
    if(username==='test' && password === '123' ){
        return true
    }
    return false;
}

module.exports = {
    login
}