<template>
    <div id="register">
        <div class="othiscont" style="height: 667px;">
            <header class="login_head">
                <div class="header_left"><i class="icon el-icon-arrow-left" @click="$router.go(-1)"></i></div>
                <div class="login_title">喜地-手机注册</div>
            </header>

            <section class="login_cont">
                <div class="login_box">
                    <div class="login_box_xiao">
                        <i class="icon icon_phone el-icon-mobile"></i>
                        <input type="text" maxlength="11" data-hint="0" placeholder="手机号" v-model="username" v-on:keyup="checkname">
                        <i class="icon el-icon-error icon_unfinished" ></i>
                    </div>
                </div>

                <div class="login_box">
                    <i class="icon icon_mail el-icon-lock"></i>
                    <input maxlength="16" minlength="6" placeholder="密码：6-16位字符" type="password" v-model="passone" v-on:keyup="checkpass">
                    <i class="icon el-icon-error icon_unfinished" ></i>
                </div>

                <div class="login_box password">
                    <i class="icon icon_lock el-icon-lock"></i>
                    <input maxlength="16" minlength="6" placeholder="请再次输入密码" type="password" v-model="passtwo" v-on:keyup="checkpass">
                    <i class="icon el-icon-error icon_unfinished" ></i>
                    <i class="icon icon_password_hide "></i>
                </div>

                <div data-type="phonelogin" class="btn btn_login" :class="{ok:(passisok === true )}" @click.prevent="register">立即注册</div>

                <div class="newagree">
                    <div class="logncheckbox">
                        <div class="dd">
                            <i class="icon el-icon-check"></i>
                        </div>
                    </div>
                    同意
                    <a href="javascript:;">《喜地用户协议》</a>
                </div>

                <div class="login_third">
                    <a href="javascript:;"><i class="icon "></i></a>
                    <a href="javascript:;"><i class="icon "></i></a>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            passone:'',
            passtwo:'',
            nameisok: false,
            passisok: false,
        }
    },
    methods:{
        checkname(){
            if(/^1[34578]\d{9}$/.test(this.username)){
                this.nameisok = true
            }else{
                this.nameisok = false
            }
        },
        checkpass(){
            if(this.passone === this.passtwo){
                this.passisok = true
            }else{
                this.passisok = false
            }
        },
        async register(){
            if(this.username && this.passone && this.passtwo){
                if(/^1[34578]\d{9}$/.test(this.username)){
                    if(this.passone === this.passtwo){
                        let username = this.username
                        let password = this.passtwo
                        let {data} = await this.$axios.post(`http://193.112.4.47:4321/login/reg`,{
                            username,
                            password
                        });
                        console.log(data)

                    }else{
                        return false
                    }
                }else{
                    return false
                }
            }else{
                return false
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
.login_head .login_title {
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    color: #fff;
}


.login_cont {
    padding: 0rem 0.83333rem 0 0.83333rem;
}
.login_cont .login_box_duan {
    height: 3.75rem;
    margin-top: 1.5rem;
}
.login_cont .login_box_duan .login_box_xiao {
    display: inline-block;
    background-color: #fff;
    width: 61%;
    position: relative;
    float: left;
    height: 3.75rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}
.login_cont .login_box_duan .login_box_xiao .icon {
    position: absolute;
    color: #777;
    font-size: 1.5rem;
    top: 1.16667rem;
    padding-left: 0.83333rem;
}
.login_cont .login_box_duan .login_box_xiao input {
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #333;
    font-size: 1rem;
    padding: 1.25rem 0 0 2.91667rem;
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



.login_cont .login_box .icon.icon_unfinished {
    right: 0.83333rem;
    color: #c5c5c5;
}
.password .icon_unfinished {
    margin-right: 2.16667rem;
}
.login_cont .login_box .icon.icon_password_hide, .login_cont .login_box .icon.icon_password_show {
    right: 0.83333rem;
    color: #c5c5c5;
    font-size: 1.83333rem;
    top: 0.91667rem;
}

.login_cont .newagree {
    color: #fff;
    padding-top: 0.83333rem;
    font-size: 1.16667rem;
}
.login_cont .newagree .logncheckbox {
    display: inline-block;
    margin-right: 0.83333rem;
    vertical-align: middle;
}
.login_cont .newagree .logncheckbox .dd {
    width: 1.16667rem;
    height: 1.16667rem;
    border: 1px #fff solid;
    display: inline-block;
    overflow: hidden;
    margin-top: 1px;
}
.login_cont .newagree .logncheckbox .dd i {
    font-size: 1.5rem;
    display: block;
    margin: -1px 0 0 -2px;
}
.login_cont .newagree a {
    color: #00a0e9;
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
</style>
