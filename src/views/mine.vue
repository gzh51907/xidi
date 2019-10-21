<template>
    <div class="member-space">
        <header class="header">
            <h2 class="header-title">我的喜地</h2>
        </header>

        <div class="content">
            <div class="account-section">
                <div class="space-article space-logo-span">
                    <div class="space-logo" @click="$router.push('login')">
                        <p class="space-avator">
                            <img src="https://static.xidibuy.com/m/static/global/images/1.0.0/icon_personN.png" alt="">
                        </p>
                        <p class="space-user">登录</p>
                    </div>

                    <div class="account-article">
                        <a href="javascript:;" class="space-outer">
                            <span class="icon-span">
                                <i class="icon el-icon-tickets"></i>
                            </span>
                            <strong class="space-nav">我的订单</strong>
                            <span class="space-info">
                                <i class="icon icon_triangle_right el-icon-arrow-right"></i>
                            </span>
                        </a>
                        <a href="javascript:;" class="space-outer">
                            <span class="icon-span">
                                <i class="icon el-icon-tickets"></i>
                            </span>
                            <strong class="space-nav">我的优惠</strong>
                            <span class="space-info">
                                <i class="icon icon_triangle_right el-icon-arrow-right"></i>
                            </span>
                        </a>
                        <a href="javascript:;" class="space-outer">
                            <span class="icon-span">
                                <i class="icon el-icon-tickets"></i>
                            </span>
                            <strong class="space-nav">我的喜欢</strong>
                            <span class="space-info">
                                <i class="icon icon_triangle_right el-icon-arrow-right"></i>
                            </span>
                        </a>
                        <a href="javascript:;" class="space-outer">
                            <span class="icon-span">
                                <i class="icon el-icon-location-outline"></i>
                            </span>
                            <strong class="space-nav">收货地址</strong>
                            <span class="space-info">
                                <i class="icon icon_triangle_right el-icon-arrow-right"></i>
                            </span>
                        </a>
                        <a href="javascript:;" class="space-outer">
                            <span class="icon-span">
                                <i class="icon el-icon-tickets"></i>
                            </span>
                            <strong class="space-nav">退货退款</strong>
                            <span class="space-info">
                                <i class="icon icon_triangle_right el-icon-arrow-right"></i>
                            </span>
                        </a>
                    </div>

                    <div class="account-article">
                        <a href="javascript:;" class="space-outer">
                            <span class="icon-span">
                                <i class="icon el-icon-tickets"></i>
                            </span>
                            <strong class="space-nav">常见问题</strong>
                            <span class="space-info">
                                <i class="icon icon_triangle_right el-icon-arrow-right"></i>
                            </span>
                        </a>
                        <a href="javascript:;" class="space-outer">
                            <span class="icon-span">
                                <i class="icon el-icon-service"></i>
                            </span>
                            <strong class="space-nav">联系客服</strong>
                            <span class="space-info">
                                <i class="icon icon_triangle_right el-icon-arrow-right"></i>
                            </span>
                        </a>
                        <a href="javascript:;" class="space-outer">
                            <span class="icon-span">
                                <i class="icon el-icon-tickets"></i>
                            </span>
                            <strong class="space-nav">意见反馈</strong>
                            <span class="space-info">
                                <i class="icon icon_triangle_right el-icon-arrow-right"></i>
                            </span>
                        </a>
                    </div>

                </div>
            </div>
        </div>

        <footerTab></footerTab>

    </div>
</template>

<script>
import footerTab from '../components/footer.vue'
export default {
    data(){
        return{
            item:4
        }
    },
    methods:{
        // goLogin(){
        //     this.$router.push('login')
        // }
    },
    components:{
        footerTab
    }
}
</script>

<style scoped>
.header {
    box-shadow: 0 2px 3px rgba(0,0,0,.1);
    margin: 0 auto;
    width: 100%;
    max-width: 53.33333rem;
    height: 4rem;
    line-height: 4rem;
    background-color: #fff;
    margin: 0;
    padding: 0 1.25rem;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    z-index: 1;
}
.header .header-title {
    display: inline-block;
    font-size: 1.5rem;
    color: #333;
    width: 16.66667rem;
    height: 4rem;
    margin: 0 auto;
    text-align: center;
    vertical-align: top;
    line-height: 4rem
}


.content {
    min-height: 300px;
    padding-bottom: 5.66667rem;
}
.account-section {
    font-size: 1.16667rem;
}
.account-article, .space-article {
    display: block;
    padding: 0.83333rem 0;
    border-bottom: 1px solid #ddd;
    color: #333;
}
.form-notice:after, .account-article:after, .space-article:after, .space-outer:after{
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
    line-height: 0;
    content: ' ';
}
.space-logo-span {
    padding: 0;
    border-bottom: none;
}
.space-logo {
    display: block;
    position: relative;
    padding: 1.66667rem 0.83333rem 0.83333rem;
    background: url('../imgs/space_hd.jpg') center center no-repeat;
    -webkit-background-size: 100% 100%;
    text-align: center;
    color: #fff;
}
.space-avator {
    margin: 0 auto;
    width: 6.25rem;
    height: 6.25rem;
    border: 2px solid #fff;
    overflow: hidden;
    border-radius: 50%;
}
.space-avator img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.space-user {
    font-size: 1.16667rem;
    line-height: 2.5rem;
}
.account-article {
    margin: 0 1.25rem;
}
.account-outer, .space-outer {
    position: relative;
    padding: 0.83333rem 0.41667rem;
    line-height: 2rem;
}
.space-outer {
    color: #333;
    display: block;
}
.icon-span {
    float: left;
    margin-right: 0.83333rem;
    margin-left: -0.41667rem;
    width: 2.08333rem;
    text-align: center;
    color: #999;
}
.account-outer .icon, .space-outer .icon {
    position: absolute;
    right: 0rem;
    top: 50%;
}
.icon-span .icon {
    position: static;
    line-height: 2rem;
}
.space-nav {
    float: left;
}
.space-info {
    float: right;
    padding-right: 1.25rem;
}
.account-outer .icon_triangle_right, .space-outer .icon_triangle_right {
    margin-top: -1.04167rem;
    font-size: 2.08333rem;
    color: #c5c5c5;
}
.icon_triangle_right:before {
    color: #c5c5c5;
}


.account-article:last-child, .space-article:last-child {
    border-bottom: 0;
}

</style>

