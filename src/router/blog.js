const {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
} = require('../controller/blog')
const {SuccessModel,ErrorModel} = require('../model/resModel')
const handleBlogRouter = (req,res)=>{
    const method = req.method;
   
    if('GET'===method && req.path === '/api/blog/list'){
        const author = req.query.author;
        const keyWord = req.query.keyWord;
        return new SuccessModel( getList(author,keyWord) )
    }
    if('GET'===method && req.path === '/api/blog/detail'){
        const id = req.query.id;
        return new SuccessModel( getDetail(id) )
    }
    if('POST'===method && req.path === '/api/blog/add'){
        const blogData = req.body;
        return new SuccessModel( newBlog(blogData) )
    }
    if('POST'===method && req.path === '/api/blog/update'){
        const id = req.query.id;
        const blogData = req.body;
        if( updateBlog() ){
            return new SuccessModel()
        }else{
            return new ErrorModel( '博客更新失败' )
        }
        
    }
    if('POST'===method && req.path === '/api/blog/delete'){
       const id = req.query.id;
       return new SuccessModel( deleteBlog(id) )
    }
}
module.exports = handleBlogRouter;