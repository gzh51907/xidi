<template>
    <div class="detail">
        <div class="warp">
            <header class="header" style="position:fixed; padding-left: 0; z-index: 100">
                <div class="headerBox">
                    <i class="icon icon_back el-icon-arrow-left" @click="$router.back()"></i>
                    <div class="all_nav" style="margin:0px -67px;visibility:visible;width:135px;">
                        <ul class="clear">
                            <li data-type="goods" class="on">商品</li>
                            <li data-type="assesslist">评价</li>
                        </ul>
                        <i class="buoy" style="left:0;"></i>
                    </div>
                    <div class="new_right">
                        <i class="icon icon_more el-icon-more" @click="show = !show"></i>
                        <div class="hearder_more" v-show="show">
                            <div class="header_triangle"></div>
                            <div class="floating_cont">
                                <ul >
                                    <li >
                                        <a href="/" class="router-link-active"><i  class="icon icon_home el-icon-house"></i>首页</a>
                                    </li> 
                                    <li >
                                        <a href="javascript:;"><i  class="icon el-icon-search"></i>搜索</a>
                                    </li> 
                                    <li @click="$router.push('cart')">
                                        <a href="javascript:;"><i  class="icon el-icon-shopping-cart-full"></i>购物车</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="content_3">
                <div class="part1"  style="transition: all 0ms ease 0s; transform: translateY(0px);">
                    <div class="detail-preview">
                        <div class="block">
                            <el-carousel height="375px">
                                <el-carousel-item v-for="(item,idx) in goods.images.main" :key="idx">
                                    <img :src="item" alt="">
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                        <div class="new_icon_hchud">
                            <img src="https://static.xidibuy.com/m/static/global/images/1.0.0/new_icon_hchud.png">
                        </div>
                    </div>

                    <div class="detail-info clear">
                        <h1 class="detail-goods-name">{{goods.name}}</h1>
                        <div class="detail-tax clear">
                            <p class="detail-price">
                                <span class="price">¥{{goods.price}}</span>
                            </p>
                            <p class="detail-country">
                                <img :src="goods.country.flag"> {{goods.country.name}}
                            </p>
                        </div>
                    </div>

                    <div id="detail_choice" class="detail_choice">
                        <div id="choice_cont" class="choice_cont">
                            <span>
                                <b>已选：</b>
                                <b>" <em>红色</em> "</b>
                                <b>、1件</b>
                            </span>
                            <i class="icon el-icon-arrow-right icon-right"></i>
                        </div>
                    </div>

                    <div class="detail-section clear">
                        <p>{{goods.desc}}</p>
                    </div>

                    <div class="detail-section detail-service-box clear">
                        <ul class="detail-service">
                            <li>
                                <i class="icon el-icon-truck"></i>
                                <em>每天15:00从上海自贸区发货</em>
                            </li>
                            <li>
                                <i class="icon el-icon-truck"></i>
                                <em>七天无理由退货</em>
                            </li>
                        </ul>
                    </div>

                    <div class="detail_brand">
                        <a href="#">
                            <div class="brand_img">
                                <img :src="goods.brand.logo" alt="">
                            </div>
                            <div class="brand_text">
                                在售品牌商品
                                <span>({{goods.brand.goods}})</span>
                            </div>
                            <i class="icon el-icon-arrow-right"></i>
                        </a>
                    </div>

                    <div class="detail_introduction">
                        <div class="clear">
                            <div class="detail_imgtitle">
                                <img :src="goods.shop.logo" width="100%">
                            </div>
                            <div class="detail_imgconr">
                                <div class="cont_title">{{goods.shop.name}}</div>
                                <div class="cont_box">
                                    <i class="icon icon_unfavorite"></i>
                                    {{goods.shop.likes}}人喜欢
                                </div>
                            </div>
                        </div>
                        <div class="clear">
                            <a href="#" class="detail-brand-item" style="width: 100%;">
                                <i class="icon icon_shop el-icon-s-shop"></i> 进入厂店
                            </a>
                        </div>
                    </div>

                    <div class="detail_evaluation">
                        <div class="evaluation_box clear">
                            <div class="evaluation_box_left">
                                用户评价
                                <span>({{goods.comment.total}})</span>
                            </div>
                            <div class="evaluation_box_right">
                                <span>商品评分 
                                    <span>{{goods.comment.stars}}</span>
                                </span>
                                 <i class="icon el-icon-arrow-right"></i>
                            </div>
                        </div>
                    </div>

                    <div class="detail_wenzi">继续拖动，有更多商品内容</div>
                </div>
            </div>

            <div class="buy-dialog" v-show="joincart">
                <div class="dialog-mask"></div>
                <div class="goodsSku">
                    <div class="skuSelect">
                        <div class="skuSelect-img">
                            <img :src="goods.images.main[0]" alt="">
                        </div>
                        <div class="skuSelect-sku">
                            <span class="price">¥{{goods.price}}</span>
                            <span>
                                <b >已选：{{this.num}}件</b>
                            </span>
                            <div class="skuSelect-close icon el-icon-close" @click="joincart = false"></div>
                        </div>
                        <div class="detail_choice">
                            <div class="choice_cont">
                                <dl>
                                    <dt>数量</dt>
                                    <dd class="clear">
                                        <div class="goods-amount">
                                            <el-input-number v-model="num" :min="1" :max="99" label="描述文字" size="mini"></el-input-number>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div class="goodsSku-sub" @click="join">
                            <span>确定</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="both-fixed-button">
                <div class="goods-price"><i class="icon el-icon-chat-dot-round"></i></div>
                <div class="footer_cart" @click="$router.push('cart')"><i class="icon el-icon-shopping-cart-full"></i></div>
                <div class="button-light buyshop">立即购买</div>
                <div xa-tap="detail|m-addCart" class="button-light" style="padding: 0px;" @click="joincart = true">加入购物车</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show:false,
            goods:[],
            num:1,
            joincart:false
        }
    },
    async created(){
        // console.log(this.$route.params)
        let {id} = this.$route.params;

        const data = await this.$axios.post(
            'http://10.3.133.74:4321/goods',{
                    id:id
            }
        )
        this.goods = data.data[0].data
        // console.log(data)
        
    },
    methods:{
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
            console.log(join.data.ok)
            if(join.data.ok === 1){
                this.joincart = false
            }
        }
    }
}
</script>

<style scoped>
.header, .header1, .header2, .header3 {
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
.header {
    box-shadow: 0 2px 3px rgba(0,0,0,.1);
    margin: 0 auto;
}
.headerBox{
    text-align: center
}
.header .icon_back {
    position: absolute;
    left: -.41667rem;
    font-size: 2rem;
    line-height: 48px;
    color: #999;
    width: 4rem;
}
.all_nav {
    position: absolute;
    margin: 0 -8.33333rem;
    font-size: 1.41667rem;
    width: 16.66667rem;
    left: 50%;
}
.all_nav ul li {
    float: left;
    padding: 0 1.25rem;
    width: 5.5rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.all_nav ul li.on {
    font-size: 1.5rem;
}
.all_nav .buoy {
    position: absolute;
    top: 3.75rem;
    left: 0px;
    height: 3px;
    background-color: #4ed6d1;
    width: 46px;
    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
    transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 0.83333rem;
}
.header .new_right {
    position: absolute;
    right: 0;
    display: block;
    height: 4rem;
}
.header .icon {
    font-size: 1.5rem;
    line-height: 4rem;
    color: #888;
    width: 4rem;
}
.header .new_right .hearder_more {
    position: absolute;
    background: black;
    right: 0.83333rem;
    width: 9.58333rem;
    height: 12rem;
    opacity: .7;
    z-index: 100;
}
.header .new_right .hearder_more .header_triangle {
    position: absolute;
    top: -0.58333rem;
    right: 0.83333rem;
    width: 1.16667rem;
    height: 1.16667rem;
    background: black;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}
.header .new_right .hearder_more .floating_cont {
    height: 12rem;
    overflow: hidden;
    width: 100%;
}
.header .new_right .hearder_more .floating_cont ul li {
    width: 100%;
    position: relative;
    border-bottom: 1px solid white;
    font-size: 13px;
    overflow: hidden;
    padding-left: 17px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #ffffff;
}
.header .new_right .hearder_more .floating_cont ul li a {
    display: block;
    color: #ffffff;
}
.header .new_right .hearder_more .floating_cont ul li i {
    width: 4rem;
    text-align: center;
    color: #ffffff;
    position: absolute;
    left: 0;
}


.content_3, .content_1, .content_2 {
    background-color: #ffffff;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-bottom: 4rem;
}
.content_3 {
    height: 100%;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 4rem 0;
}
.detail-preview {
    width: 100%;
    position: relative;
    background: #ffffff url(https://static.xidibuy.com/m/static/global/images/1.0.0/loadingx.gif) 50% 50% no-repeat;
}
.detail-preview .new_icon_hchud {
    width: 7.5rem;
    height: 7.5rem;
    position: absolute;
    bottom: 1.25rem;
    left: 1.25rem;
    z-index: 1000;
}
.detail-preview .new_icon_hchud img {
    width: 7.5rem;
    height: 7.5rem;
}
.swiper-img {
    width: 100%;
    height: 100%;
}


.detail-info, .detail-goodAttr, .detail-snapInfo, .detail-section {
    position: relative;
    margin: 0 1.25rem;
    padding: 0.83333rem 0 1.66667rem 0;
    line-height: 1.66667rem;
}
.detail-info .detail-goods-name{
    width: 100%;
}
.detail-goods-name {
    font-size: 1.25rem;
    font-weight: 700;
    display: inline-block;
}
.detail-tax {
    font-size: 1rem;
    color: #888;
    vertical-align: middle;
    line-height: 2.5rem;
}
.detail-tax p {
    display: inline-block;
    vertical-align: middle;
}
.detail-price span.price {
    font-size: 1.5rem;
    color: #00bebf;
}
.detail-country{
    float: right;
}
.detail-country img{
    display: block;
    width: 2.5rem;
    float: left;
    padding-top: 0.33333rem;
    padding-right: 0.83333rem
}


#detail_choice {
    border-top: 0.75rem solid #eee;
    margin-bottom: 1.66667rem;
    padding-top: 0;
}
.detail_choice {
    padding: 0.83333rem 1.25rem;
}
#choice_cont {
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom: 1px solid #dcdddc;
    padding: 1.25rem 1.25rem;
    padding-left: 0;
}
#choice_cont .icon-right {
    position: absolute;
    top: 1.08333rem;
    right: .416667rem;
    color: #777
}
.detail-service {
    color: #888;
}
.detail-service li:first-child {
    text-align: left;
}
.detail-service li {
    display: block;
    -webkit-box-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
    -moz-flex: 1;
    -o-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    width: auto;
    white-space: nowrap;
    font-size: 0;
}
.detail-service li i {
    margin-right: 0.41667rem;
    font-size: 2.06667rem;
    color: #c5c5c5;
    vertical-align: top;
}
.detail-service li em {
    font-size: 1rem;
    line-height: 2.16667rem;
}
.detail-service li:last-child {
    text-align: right;
}
.fixed-button, .static-button, .dialog-foot, .detail-service, .detail-brand{
    display: -moz-flex;
    display: -o-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.detail_brand {
    border-bottom: 0.83333rem solid #f1f1f1;
    border-top: 0.83333rem solid #f1f1f1;
    padding: 1.25rem 1.25rem;
    position: relative;
    color: #333;
    overflow: hidden;
}
.detail_brand .brand_img {
    width: 7.33333rem;
    height: 3.33333rem;
    float: left;
    margin-right: 1.25rem;
}
.detail_brand .brand_img img {
    width: 100%;
    height: 100%;
}
.detail_brand .brand_text {
    overflow: hidden;
    text-align: right;
    line-height: 3.33333rem;
    padding-right: 0.83333rem;
    color: #777777;
    font-size: 1.25rem;
}
.detail_brand .el-icon-arrow-right {
    color: #777;
    position: absolute;
    right: 1.66667rem;
    top: 2.08333rem;
    margin: 0 -12.5px;
}
.icon_triangle_right:before {
    color: #c5c5c5;
}
.detail_introduction {
    border-bottom: 0.83333rem solid #f1f1f1;
    padding: 0.83333rem 1.25rem;
}
.detail_introduction .detail_imgtitle {
    width: 4.16667rem;
    height: 4.16667rem;
    border-radius: 4.16667rem;
    overflow: hidden;
    float: left;
}
.detail_introduction .detail_imgtitle img {
    width: 100%;
    height: 100%;
}
.detail_introduction .detail_imgconr {
    padding: 0.41667rem 0 0 5.41667rem;
    height: 4.16667rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 0.83333rem;
}
.detail_introduction .detail_imgconr .cont_title {
    font-size: 1.16667rem;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    text-overflow: ellipsis;
}
.detail_introduction .detail_imgconr .cont_box {
    font-size: 1rem;
    color: #888888;
    padding-top: 0.83333rem;
}
.detail_introduction .detail_imgconr .cont_box .icon_unfavorite {
    font-size: 1.66667rem;
    margin-top: -2px;
    padding-right: 5px;
}


.detail_introduction a.detail-brand-item {
    width: 48%;
    float: left;
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    line-height: 3.33333rem;
    font-size: 1.16667rem;
    border: 1px solid #D5D5D5;
    margin-right: 1%;
}
.detail-brand-item {
    display: block;
    -webkit-box-flex: 3;
    -o-box-flex: 3;
    box-flex: 3;
    -moz-flex: 3;
    -o-flex: 3;
    -ms-flex: 3;
    flex: 3;
    height: 3.5rem;
    border-left: 1px solid #D5D5D5;
    color: #333;
}


.detail_evaluation{
    border-bottom: 0.83333rem solid #f1f1f1;
    position: relative;
    color: #333;
}
.detail_evaluation .evaluation_box{
    height: 4.08333rem;
    line-height: 4.08333rem;
    border-bottom: 0.08333rem solid #ddd;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 1.25rem;
    font-size: 1.25rem;
}
.detail_evaluation .evaluation_box .evaluation_box_left{
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #222;
}
.detail_evaluation .evaluation_box .evaluation_box_right{
    width: 100%;
    text-align: right;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #777;
    padding-right: 1.58333rem;
}
.detail_evaluation .el-icon-arrow-right {
    position: absolute;
    right: 2.08333rem;
    top: 2.08333rem;
    margin: -12.5px;
}
.detail_wenzi {
    background-color: #f1f1f1;
    height: 40px;
    line-height: 30px;
    text-align: center;
    color: #888888;
    font-size: 14px;
}
.detail_evaluation .evaluation_box .evaluation_box_right span {
    color: #00bebf;
}
.icon.icon_shop{
    color: #999
}


.button-default, .button-light, .button-disabled, .button-warning {
    font-size: 1.5rem;
    line-height: 4rem;
    border: 1px solid #c5c5c5;
    text-align: center;
}
.fixed-button, .both-fixed-button{
    position: fixed;
    max-width: 640px;
    width: 100%;
    bottom: 0;
    z-index: 99;
    background-color: rgba(255, 255, 255, 0.9);
    border-top: 1px solid #ddd;
}
.both-fixed-button{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 0 0 10.41667rem;
    background-color: white;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.both-fixed-button .goods-price{
    position: absolute;
    left: 0;
    width: 5.16667rem;
    height: 4rem;
    padding-top: .666667rem;
    box-sizing: border-box;
    text-align: center;
    border-right: 0.08333rem solid #dddddd;
}
.both-fixed-button .goods-price i{
    font-size: 2.75rem;
    color: #555555;
}
.both-fixed-button .footer_cart{
    position: absolute;
    left: 6.58333rem;
    top: 0.33333rem;
    margin-left: -10px;
    margin-top: -5px;
    padding: 5px 8px;
}
.both-fixed-button .footer_cart .icon{
    position: relative;
    right: 0;
    font-weight: normal;
    color: #555555;
    font-size: 2.75rem;
    top: 0.41667rem;
}
.both-fixed-button .button-light{
    width: 100%;
    float: none;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 1.33333rem;
    border: none;
}
.both-fixed-button .buyshop{
    background: #ffffff;
    color: #222222;
    border-left: 0.08333rem solid #dddddd;
}
.button-light {
    display: block;
    background-color: #4ed6d1;
    border-color: #4ed6d1;
    color: #fff;
}

.el-carousel__item img {
    width: 100%;
    height: 100%;
}
.el-carousel__indicator--horizontal{
    width: 5px;
    height: 5px;
    padding: 10px 4px;
}
.el-carousel__button{
    width: 100%;
    height: 5px;
    border-radius: 5px;
}

.buy-dialog {
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.buy-dialog .dialog-mask {
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.5;
}
.buy-dialog .goodsSku {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    padding-bottom: 5rem;
}
.buy-dialog .goodsSku .skuSelect {
    padding: 1.83333rem 1rem 0;
    height: 4.83333rem;
    position: relative;
}
.buy-dialog .goodsSku .skuSelect .skuSelect-img {
    position: absolute;
    top: -2.08333rem;
    width: 7.5rem;
    height: 7.5rem;
    border: 0.25rem solid #FFF;
    background: #fff;
}
.buy-dialog .goodsSku .skuSelect .skuSelect-img img {
    width: 7.5rem;
    height: 7.5rem;
}
.buy-dialog .goodsSku .skuSelect .skuSelect-sku {
    margin-left: 9rem;
    width: 20rem;
}
.buy-dialog .goodsSku .skuSelect .skuSelect-sku .price {
    font-size: 1.58333rem;
    color: #4ed6d1;
    line-height: 1.58333rem;
    padding-bottom: 0.375rem;
    padding-top: 0.33333rem;
    display: inline-block;
}
.buy-dialog .goodsSku .skuSelect .skuSelect-sku span {
    display: block;
    font-size: 1.16667rem;
    color: #222;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.buy-dialog .goodsSku .skuSelect .skuSelect-close {
    position: absolute;
    right: 0.83333rem;
    top: 0.83333rem;
    padding: 0.83333rem;
    color: #555;
    font-size: 2rem;
}
.detail_choice .choice_cont dl dt {
    font-size: 1.16667rem;
    color: #333;
}
.detail_choice .choice_cont dl dd {
    padding: 1.04167rem 0;
}
.goods-amount {
    float: left;
    margin-right: 0.83333rem;
    width: 8.33333rem;
}
#goods-amount {
    width: 13.75rem;
}
.buy-dialog .goodsSku .goodsSku-sub {
    text-align: center;
    line-height: 4.16667rem;
    background: #4ed6d1;
    color: #fff;
    font-size: 1.41667rem;
    position: fixed;
    height: 4.16667rem;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
