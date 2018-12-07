const mongoose = require('mongoose')
const Router = require('koa-router')
const router = new Router()

router.get('/',async(ctx)=>{
    ctx.body="这是用户操作首页"
})
router.post('/register', async(ctx)=>{
        //取得model
        console.log(ctx.request.body)
        const User = mongoose.model('shortUser')
        //把接受过来的post封装成一个新的User对象
        let newUser = new User(ctx.request.body)
        ctx.body = ctx.request.body
        console.log(ctx.body)
        //用mongoose的save方法直接储存，然后判断是否c成功，返回相应打的结果
        await newUser.save().then(()=>{
            ctx.body = {
                code:200,
                message:'注册成功'
            }
        }).catch((err)=>{
            ctx.body = {
                code:500,
                message:'注册失败'
            }
            console.log(err)
        })
})
router.post('/login', async (ctx)=>{
    let loginUser = ctx.request.body
    let userName = loginUser.userName
    let password = loginUser.password
    const User = mongoose.model('shortUser')
    await User.findOne({userName:userName}).exec().then(async(result)=>{
        console.log(result)
        if(result){
            let newUser = new User()
            console.log(newUser)

            await newUser.comparePassword(password,result.password)
            .then((isMatch)=>{
                ctx.body = {
                    code:200,
                    message:isMatch
                }
            })
        }else{
            ctx.body={code:500,message:error}
        }
    }).catch((err)=>{
        console.log(error)
            ctx.body={code:500,message:err}
    })

})


module.exports = router