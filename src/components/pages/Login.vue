<template>
    <div>
        <van-nav-bar
        title="用户登录"
        left-text="返回"
        left-arrow
        @click-left="goBack"
        />
        <div class="register-panel">
        <van-field
            :error-message="usernameErrorMsg"
            v-model="username"
            label="用户名"
            icon="clear"
            placeholder="请输入用户名"
            required
            @click-icon="username = ''"
        />
        <van-field
            :error-message="passwordErrorMsg"
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />
        <div class="register-button">
            <van-button plain type="primary" size="large" :loading="openLoading" @click='LoginAction'>登录</van-button>
        </div>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
import url from '@/serviceAPI.config.js'
import { Toast } from 'vant';
    export default {
        data() {
            return {
                username:'',
                password:'',
                usernameErrorMsg:'',   //当用户名出现错误的时候
                passwordErrorMsg:'',   //当密码出现错误的时候
                openLoading:false
            }
        },
        created(){
            if(localStorage.userInfo){
                Toast.success('您已经登录')
                this.$router.push('/')
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            },
            axiosLoginUser(){
                axios({
                    url:url.loginUser,
                    method:'post',
                    data:{
                        userName:this.username,
                        password:this.password
                    }
                }).then((res)=>{
                    if(res.data.code == 200 && res.data.message){
                        new Promise((resolve,reject)=>{
                            localStorage.userInfo = {useName:this.username}
                            setTimeout(()=>{
                                resolve()
                            },500)
                        }).then(()=>{
                            Toast.success('登录成功')
                            this.$router.push('/')
                        }).catch((err)=>{
                            Toast.fail('登录状态保存失败')
                            console.log(err)
                        })

                    }else{
                        Toast.success('登录失败')
                        this.openLoading = false 
                    }
                }).catch((err)=>{
                    Toast.success('登录失败')
                    console.log(err)
                    this.openLoading = false
                })
            },
            checkForm(){
                let isOk= true
                if(this.username.length<5){
                    this.usernameErrorMsg="用户名不能小于5位"
                    isOk= false
                }else{
                    this.usernameErrorMsg=''
                }
                if(this.password.length<6){
                    this.passwordErrorMsg="密码不能少于6位"
                    isOk= false
                }else{
                    this.passwordErrorMsg=''
                }
                return isOk
            },
            LoginAction(){
                 this.checkForm() && this.axiosLoginUser()
            }

        }
    }
</script>

<style scoped>

</style>