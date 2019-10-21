<template>
    <div class="othiscont" style="min-height: 667px;">
        <header class="login_head">
            <div class="header_left">
                <i class="icon el-icon-arrow-left" style="color:#fff" @click="$router.go(-1)"></i>
            </div>

            <div class="header_right">
                <a href="/" class="router-link-active"><i class="icon el-icon-house"></i></a>
            </div>
        </header>

        <section class="login_cont">
            <div class="login_logo">
                <a href="/">
                    <i class="icon icon_dalogo"></i>
                </a>
            </div>

            <div class="login_box">
                <i class="icon el-icon-user"></i>
                <input type="text" placeholder="手机号/邮箱/用户名" v-model="username">
                <i class="icon el-icon-error" style="display: none;"></i>
            </div>
            
            <div class="login_box password">
                <i class="icon el-icon-lock"></i>
                <input type="password" placeholder="登录密码" maxlength="16" minlength="6" v-model="password" v-on:keyup="checkall">
                <i class="icon el-icon-error" style="display: none;"></i>
                <i class="icon el-icon-view"></i>
            </div>

            <div class="btn btn_login" @click="login" :class="{ok:check === true}">登录</div>

            <div class="login_text">
                <div class="dynamiccodelogin">手机动态码登录</div>
                <a href="javascript:;">忘记密码</a>
            </div>

            <div class="btn btn_regis" style="display: block; clear: both" @click="$router.push('register')">快速注册</div>

            <div class="login_third">
                <a href="javascript:;">
                    <i class="icon icon_weibo"></i>
                </a>
                <a href="javascript:;">
                    <i class="icon icon_qq"></i>
                </a>
            </div>
        </section>

        <p class="copyright"> © 2019 喜地电子商务有限公司 版权所有</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:'',
            mdl:true,
            check: false
        }
    },
    methods:{
        checkall(){
            if(this.username && this.password){
                this.check = true
            }else{
                this.check = false
            }
        },
        async login(){
            let username = this.username
            let password = this.password
            let mdl = this.mdl
            // console.log(username,password)
            const {data} = await this.$axios.post(`http://10.3.133.74:4321/login/login`,{
                username,
                password,
                mdl
            });
            console.log(data)
            if(data.code === true){
                let {targeturl} = this.$route.query
                if(targeturl){

                    this.$router.replace({
                        path: targeturl 
                        // parans:{username},
                        // query:{username}
                    });
                }else{
                    this.$router.replace({
                        name: 'mine'
                    })
                }
                localStorage.setItem('Authorization',data.data)
            }else{
                alert('账号密码不正确')
            }
        }
    }
}
</script>

<style scoped>
.othiscont {
    height: 100%;
    background-image: url(https://static.xidibuy.com/m/static/global/images/1.0.0/loge_background.jpg);
    background-size: 100% auto;
    background-repeat: no-repeat;
    padding: 0 0.83333rem;
}
.login_head {
    height: 4rem;
    line-height: 4rem;
    color: #fff;
    width: 100%;
    left: 0;
    top: 0;
    background-size: 100% auto;
    background-repeat: no-repeat;
    z-index: 9;
}
.login_head .header_left {
    position: absolute;
    left: 1.25rem;
}
.icon {
    display: inline-block;
}
.login_head .header_right {
    position: absolute;
    right: 0.83333rem;
}
.login_head .header_right a {
    color: #fff;
}
.el-icon-house {
    position: absolute;
    right: 1.25rem;
    top: 0;
    color: #fff;
    line-height: 4rem;
    margin: 0;
}
.login_cont {
    padding: 0rem 0.83333rem 0 0.83333rem;
}
.login_cont .login_logo {
    padding-bottom: 1.66667rem;
    overflow: hidden;
    text-align: center;
}


.login_cont .login_box {
    background-color: #fff;
    height: 3.75rem;
    margin-top: 1.25rem;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}
.login_cont .login_box .icon {
    position: absolute;
    color: #777;
    font-size: 1.33333rem;
    top: 1.16667rem;
    padding-left: 0.83333rem;
}
.login_cont .login_box input {
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #333;
    font-size: 1rem;
    padding: 0.83333rem 0 0 2.91667rem;
    line-height: 2.33333rem;
}
.login_cont .login_box .icon.el-icon-view {
    color: #c5c5c5;
    font-size: 1.83333rem;
    top: 0.91667rem;
    right: 0.83333rem;
}
.login_cont .login_box .el-icon-error{
    right: .833333rem;
    color: #c5c5c5
}
.login_cont .password .el-icon-error{
    right: 2.916667rem;
    color: #c5c5c5
}
.btn {
    background-color: #fff;
    height: 3.75rem;
    line-height: 3.75rem;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}
.btn.btn_login {
    background-color: #4ed6d1;
    margin-top: 2.08333rem;
    width: 100%;
    color: rgba(255, 255, 255, 0.4);
}
.btn.ok{
    color: rgba(255, 255, 255, 1);
}
.login_cont .login_text {
    font-size: 1.08333rem;
    padding-top: 0.91667rem;
    height: 1.66667rem;
}
.login_cont .login_text a, .login_cont .login_text div {
    display: inline-block;
    float: left;
    color: #fff;
}
.login_cont .login_text div + a {
    float: right;
}
.btn.btn_regis {
    background-color: #4a82b1;
    margin-top: 2.08333rem;
    width: 100%;
}
.login_cont .login_third {
    padding-top: 3.75rem;
    text-align: center;
    padding-bottom: 3.16667rem;
}
.login_cont .login_third a {
    color: #fff;
    display: inline-block;
    padding: 0 20px;
}
.login_cont .login_third a .icon {
    font-size: 3.75rem;
    position: relative;
}
.copyright {
    color: #c5c5c5;
    text-align: center;
    padding-bottom: 0.83333rem;
}
</style>

