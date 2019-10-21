<template>
    <div class="cart">
        <header class="header">
            <h2 class="header-title">购物车</h2>
            <span class="header-right right-coupon">优惠券</span>
        </header>

        <div class="cart_login">
            <div class="login_box" style="display:none">
                <p>您可以在登录后查看之前加入购物车的商品<span class="login">登录</span></p>
            </div>
        </div>

        <div class="cart-section">
            <!-- <div class="empty-page">
                <div class="empty-section">
                    <p class="empty-image"><img src="https://static.xidibuy.com//m/static/global/images/1.0.0/feedback.png"></p>
                    <div class="empty-notice">
                        <p><span>您的购物车中没有商品，<br>赶紧挑选心爱的商品塞满您的购物车吧！</span></p>
                    </div>
                </div>
                <div class="static-button">
                    <a href="/" class="button-default router-link-active">随便逛逛</a>
                </div>
            </div> -->

            <div class="cart-list">
                <div class="shopbox">
                    <div class="cart-box" v-for="(item,idx) in goods" :key="idx">
                            <div class="cart-module">
                                <div class="cart-column cart-check">
                                    <div class="cart-check-box">
                                        <input type="checkbox" :value="item" v-model="checkgoods">
                                    </div>
                                </div>                        
                                <div class="cart-column">
                                    <div class="cart-goods-info clear">
                                        <div class="cart-column cart-img">
                                            <img :src="item.coverImg" alt="">
                                        </div>
                                        <div class="cart-column cart-width">
                                            <div class="cart-goods-intro">
                                                <div class="intro-left">
                                                    <h3 class="cart-goods-name">{{item.longName}}</h3>
                                                </div>
                                                <div class="cart-goods-price">¥{{item.price}}</div>
                                            </div>
                                            <div class="cart-counter">
                                                <el-input-number v-model="item.buyNum" :min="1" size="mini"></el-input-number>
                                                <div class="cart-goods-notice">
                                                    <p class="icon icon_clear el-icon-delete" @click="deletegoods(item.goodsId,item.shopId)"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="both-fixed-button cartInfo" style="padding: 0px;">
            <div class="cart-column cart-check">
                <input type="checkbox" @click="checkall" :checked="checkgoods.length == goods.length && checkgoods.length>0">
                <div class="allselect">全选</div>
            </div>
            <div class="cart-info">
                <p class="cart-total">
                    总计 : <span>¥{{totalprice}}</span>
                </p>
            </div>
            <div class="button-light settlement button-disabled">
                结算(
                <var class="totalCount">{{total_num}}</var>
                )
            </div>
        </div>

        <div class="shopbox_bottom"></div>

        <section class="products" style="height: auto;margin-top: 0;">
            <h1 class="product-title">— 为您推荐 —</h1>
            <ul class="product-list clear">
                <li class="product_item" v-for="(item,idx) in data" :key="idx">
                    <div class="product_box">
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">
                                <span>¥{{item.price}} </span>
                            </p>
                            <p class="product-local clear">
                                <span class="product-country">{{item.countryName}}</span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>

        <footerTab></footerTab>

    </div>
</template>

<script>
import footerTab from '../components/footer.vue'
export default {
    data(){
        return{
            data:[],
            num: 1,
            goods:[],
            checkgoods: []
        }
    },
    async created(){
        const recomlist = await this.$axios(
            'https://api.m.xidibuy.com/v2/cart/recomList'
        )
        this.data = recomlist.data.data
        // console.log(this.data)

        let Authorization = localStorage.getItem('Authorization');
        // console.log(Authorization)
        const cart = await this.$axios.get('http://10.3.133.74:4321/shopping/list',{
            params:{
            Authorization
            }
           
        })
        this.goods = cart.data.shop651
        console.log(this.goods)
    },
    methods: {
        checkall(){
            if(this.checkgoods.length >0) {
                this.checkgoods = []
            }else{
                this.goods.forEach(item => {
                    this.checkgoods.push(item)
                })
            }
        },
        async deletegoods(goodsId,shopId){
            this.checkgoods.splice(this.checkgoods.indexOf(goodsId),1)
            this.goods.splice(this.goods.indexOf(goodsId),1)
            let agentId = goodsId
            // let shopId = shopId
            let Authorization = localStorage.getItem('Authorization');
            // console.log(agentId,shopId,Authorization)
            const deledata = await this.$axios.get(
                'http://10.3.133.74:4321/shopping/delete',{
                    params:{
                        shopId,
                        agentId,
                        Authorization
                    }
                }
            )
        },
        async join(){
            let buyNum = this.num
            let agentId = this.goods.id
            let shopId = this.goods.shop.id
            let Authorization = localStorage.getItem('Authorization');
            console.log(buyNum,agentId,shopId,Authorization)
            const join = await this.$axios.get(`http://10.3.133.74:4321/shopping/create`,{
                params:{
                    buyNum,
                    agentId,
                    shopId,
                    Authorization
                }
               
            });
            console.log(join)
        }
    },
    computed:{
        totalprice(){
            let total = 0;
            this.checkgoods.forEach(item => {
                total += item.price * item.buyNum
            });
            return total
        },
        total_num() {
            let totalnum = 0;
            this.checkgoods.forEach(item => {
                totalnum += Number(item.buyNum);
            })
            return totalnum
        },
        
    },
    components:{
        footerTab
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    max-width: 53.33333rem;
    height: 4rem;
    line-height: 4rem;
    background-color: #fff;
    margin: 0;
    padding: 0 1.25rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    z-index: 1;
}
.header {
    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
}
.header .header-title{
    display: inline-block;
    font-size: 1.5rem;
    color: #333;
    width: 16.66667rem;
    height: 4rem;
    margin: 0 auto;
    text-align: center;
    vertical-align: top;
}
.header .header-right {
    position: absolute;
    display: block;
    top: 0;
    right: 0;
}
.header .header-right.right-coupon{
    width: 5.16667rem;
    line-height: 1.66667rem;
    background-color: #ff7f79;
    color: white;
    font-size: 1rem;
    height: 1.66667rem;
    margin-right: 1.5rem;
    margin-top: 1.16667rem;
    border-radius: 1.33333rem;
}

.cart_login {
    height: 3.33333rem;
}
.cart_login .login_box {
    height: 3.33333rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0.75rem 0.83333rem;
    background-color: #f3f3f3;
}
.cart_login .login_box p {
    line-height: 1.91667rem;
    color: #777777;
}
.cart_login .login_box p .login {
    width: 4.16667rem;
    display: block;
    float: right;
    text-align: center;
    background-color: #fff;
    border: 1px solid #ddd;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #333;
    line-height: 1.83333rem;
}


.empty-page {
    margin-bottom: 4.16667rem;
    text-align: center;
}
.empty-section {
    padding: 3.33333rem 0 2.91667rem;
}
.empty-image {
    margin: 0 auto;
    max-width: 20.83333rem;
    max-height: 15rem;
}
.empty-image img {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 20.83333rem;
    max-height: 15rem;
}
.empty-notice {
    margin-bottom: 0.83333rem;
}
.empty-notice span {
    font-size: 1.41667rem;
    line-height: 2.08333rem;
    vertical-align: middle;
    color: #888;
}
.static-button {
    padding: 0 0.83333rem;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.static-button a {
    width: 100%;
}
.button-default{
    display: block;
    color: #333;
    background-color: #fff;
    border-color: #c5c5c5;
    font-size: 1.5rem;
    line-height: 4rem;
    border: 1px solid #c5c5c5;
    text-align: center;
}

.shopbox_bottom {
    background-color: #f7f7f7;
    width: 100%;
    height: 0.66667rem;
    border-top: 1px solid #DDDDDD;
    border-bottom: 1px solid #DDDDDD;
}

.products {
    height: 100%;
    padding-bottom: 0.83333rem;
    margin-top: 7.66667rem;
    background-color: #fff;
}
.products .product-title {
    border-bottom: 1px solid #f3f3f3;
    background-color: #fff;
    width: 100%;
    height: 3.66667rem;
    line-height: 3.66667rem;
    padding-left: 0.83333rem;
    font-size: 1.25rem;
    -webkit-transition: all 400ms linear;
    transition: all 400ms linear;
}
.products .product-title {
    text-align: center;
    padding: 0.25rem 0;
    letter-spacing: 3px;
    font-size: 1.33333rem;
}
.products .product-list {
    padding: 0;
    overflow: hidden;
    padding-bottom: 8.33333rem;
    display: block
}
.product_item {
    width: 50%;
    border-bottom: 1px solid #f3f3f3;
    border-right: 1px solid #f3f3f3;
    display: block;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.product_item .product_box {
    padding: 0.83333rem;
}
.product_item .product_box .product_img {
    height: 0;
    position: relative;
    font-size: 0;
    padding-bottom: 100%;
    overflow: hidden;
    text-align: center;
}
.product_item .product_box .product_img img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.product_article {
    padding-bottom: 0.41667rem;
}
.product_article .product_name {
    padding-top: 0.58333rem;
    font-size: 1rem;
    display: block;
    overflow: hidden;
    line-height: 1.5;
    height: 3rem;
    overflow: hidden;
}
.product_article .product_price {
    font-size: 1.16667rem;
    color: #00bebf;
    float: left;
    padding-top: 0.41667rem;
}
.product_article .product-country {
    font-size: 1rem;
    float: right;
    color: #888888;
    padding-top: 0.41667rem;
}

/*---------商品---------*/ 

.shopbox {
    padding: 0 0.83333rem;
    position: relative;
    padding-bottom: 0.83333rem;
}
.cart-box {
    padding: 0.83333rem 0;
    width: 100%;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    border-bottom: 1px dotted #ddd;
}
.dialog-table, .cart-module {
    display: table;
}
.cart-module {
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.cart-module:last-child {
    border-bottom: none;
}
.dialog-table .dialog-cell, .cart-column {
    display: table-cell;
    vertical-align: middle;
}
.cart-check {
    width: 32px;
    vertical-align: top;
    text-align: center;
}
.cart-check .cart-check-box {
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    display: block;
    position: relative;
    margin-top: 22px;
    width: 22px;
    height: 22px;
    line-height: 22px;
    text-align: center;
}
.cart-check .cart-check-box .icon {
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    position: absolute;
    left: -0.083333rem;
    top: -0.083333rem;
    width: 1.83333rem;
    height: 1.83333rem;
    font-size: 1.83333rem; 
}
.cart-check .cart-check-box .icon_complete_circle {
    color: #00bebf;
}
.cart-goods-info {
    display: table;
    width: 100%;
}
.cart-img {
    padding-right: 0.83333rem;
    position: relative;
}
.cart-img, .cart-img img {
    width: 66px;
    height: 66px;
    vertical-align: top;
}
.cart-goods-intro {
    position: relative;
    min-height: 3.33333rem;
    line-height: 1.5rem;
    width: 100%;
}
.cart-goods-intro .intro-left {
    float: left;
    max-width: 70%;
}
.cart-goods-name {
    font-size: 1rem;
    width: 100%;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.cart-goods-price {
    float: right;
    font-size: 1.08333rem;
    color: #00bebf;
    margin-right: 0.41667rem;
}
.cart-counter {
    padding-top: 0.41667rem;
}
.counter {
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
    font-size: 1.25rem;
    line-height: 1.91667rem;
}
.counter .reduce, .counter .increase, .counter .disabled, .counter .buyNum {
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    float: left;
    width: 2rem;
    height: 2rem;
    border: 1px solid #c5c5c5;
    text-align: center;
    color: #888;
    display: block;
    overflow: hidden;
}
.counter .buyNum {
    width: 2.66667rem;
    line-height: 2rem;
    border-color: #ddd;
    border-right: none;
    border-left: none;
    font-size: 0.91667rem;
}
.cart-goods-notice {
    padding-bottom: 0.41667rem;
    font-size: 0.83333rem;
    float: right;
    margin-right: 0.41667rem;
}
.cart-goods-notice .icon_clear {
    font-size: 1.5rem;
    color: #c5c5c5;
    float: right;
}


.counter .reduce:before, .counter .increase:before, .counter .increase:after {
    position: absolute;
    left: 50%;
    top: 50%;
    content: " ";
    overflow: hidden;
}
.counter .reduce:before, .counter .increase:before {
    margin-left: -0.41667rem;
    margin-top: -0.08333rem;
    width: 0.83333rem;
    height: 0.16667rem;
    background-color: #888;
}
.counter .increase:after {
    margin-left: -0.08333rem;
    margin-top: -0.41667rem;
    width: 0.16667rem;
    height: 0.83333rem;
    background-color: #888;
}


.fixed-button, .both-fixed-button {
    position: fixed;
    max-width: 640px;
    width: 100%;
    bottom: 0;
    z-index: 99;
    background-color: rgba(255, 255, 255, 0.9);
    border-top: 1px solid #ddd;
}
.both-fixed-button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    bottom: 4.33333rem;
}
.cartInfo .cart-check {
    padding-left: 1.83333rem;
}
.cart-check>input {
    margin-top: 2.08333rem;
}
.cartInfo .cart-check .cart-check-box {
    margin-top: 1.08333rem;
}
.both-fixed-button .allselect {
    font-size: 1.16667rem;
    display: block;
    position: absolute;
    left: 3.33333rem;
    top: .416667rem;
    line-height: 4.16667rem;
}
.cart-info {
    float: left;
    font-size: 1.5rem;
    text-align: right;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-right: 1.25rem;
    line-height: 50px
}
.cart-info .cart-total {
    margin-top: 0.41667rem;
}
.el-checkbox{
    line-height: 4.166667rem;
    font-size: 1.5rem;
    color: #00bebf;
}
.button-light{
    color: #fff;
}
.button-disabled {
    background-color: #c5c5c5;
    border-color: #c5c5c5;
}
.settlement {
    width: 15rem;
    padding: 0;
    text-align: center;
}
.button-light:last-child, .button-disabled:last-child{
    margin-right: 0;
    font-size: 1.5rem;
    line-height: 4rem;
    border: 1px solid #c5c5c5;
}
.both-fixed-button .button-light, .both-fixed-button .button-disabled{
    display: inline-block;
    padding-left: 2.08333rem;
    padding-right: 2.08333rem;
}
</style>
