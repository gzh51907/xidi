<template>
    <div class="goodlist">
        <div class="main">
            <header class="header headFixed">
                <div class="headerBox">
                    <i class="icon icon_back el-icon-arrow-left" @click="$router.back()"></i>
                    <h2 class="header-title-tepian">
                        <p>锅具</p>
                    </h2>
                    <div class="header-right">
                        <div class="search_title">
                            <i class="icon el-icon-search"></i>
                        </div>
                        <a href="javascript:;" class="header-cart">
                            <i class="icon el-icon-shopping-cart-full"></i>
                        </a>
                    </div>
                </div>
            </header>

            <div class="more-info mt48">
                <div class="tepin-subNav-zhangwei">
                    <div class="tepin-subNav">
                        <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                            <swiper-slide class="tabs" v-for="(item,idx) in tabs" :key="idx" :class="{on:idx === i}">
                                <div class="abox" @click="i = idx">{{item.name}}</div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>

            <div class="group-navbar-zhangwei">
                <div class="navbar-sort">
                    <div class="navbar-sort-list">
                        <div data-order="0" class="navbar-sort-item on">综合</div>
                        <div data-order="2" class="navbar-sort-item">销量</div>
                        <div data-order="5" class="navbar-sort-item">新品</div>
                        <div data-order="3" class="navbar-sort-item">价格</div>
                        <div class="triangle_all">
                            <i data-order="3" class="icon icon_triangle_up"></i> 
                            <i data-order="3" class="icon icon_triangle_down"></i>
                        </div>
                    </div>
                </div>
            </div>


            <section class="products contentbox" style="margin-top:0" v-for="(item,idx) in goodlist" :key="idx" v-show="idx === i">
                <ul class="product-list clear">
                    <li class="product_item" v-for="(items,index) in item.data.lists" :key="index" >
                        <div class="product_box" @click="goto(items.id)">
                            <div class="product_img">
                                <img v-lazy="items.attrImg" alt="">
                            </div>
                            <div class="product_article">
                                <h2 class="product_name">
                                    <a href="javascript:;">{{items.name}}</a>
                                </h2>
                                <div class="product_info clear">
                                    <p class="product_price">
                                        <span>¥{{items.price}}</span>
                                    </p>
                                    <p class="product_country">{{items.countryName}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
import 'swiper/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data(){
        return{
            i:0,
            tabs:[],
            goodlist:[],
            swiperOption:{
                slidesPerView : 4
            }
        }
    },
    async created() {
        const data = await this.$axios(
            'https://api.m.xidibuy.com/v2/aggregation/home?cid=890&title=%E9%94%85%E5%85%B7&from=1&order=0&filterId=0&page=1&token='
        )
        this.tabs = data.data.data.tabs
        const bb = await this.$axios(
            'http://10.3.133.74:4321/nav'
        )
        this.goodlist = bb.data
        console.log(this.goodlist)
    },
    methods:{
        goto(id){
            // console.log(id)
            this.$router.push({name:'detail',params:{id}})
        }
    }
}
</script>

<style scoped>
*{touch-action: none;}
.mt48 {
    margin-top: 4rem;
}
.header {
    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
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
.headFixed {
    position: fixed;
    top: 0;
    z-index: 995;
}
.header .icon_back{
    position: absolute;
    left: -0.41667rem;
    font-size: 2rem;
    line-height: 48px;
    color: #999;
    width: 4rem;
}
.header .header-title-tepian {
    font-size: 1.5rem;
    color: #333;
    text-align: center;
}
.header .header-title-tepian p {
    display: block;
    width: 16.66667rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 48px;
    line-height: 48px;
    white-space: nowrap;
    margin: 0 auto
}
.header .header-right {
    display: block;
    top: 0;
    position: absolute;
    right: 5px;
}
header .header-right .search_title {
    right: 4rem;
    position: absolute;
    font-size: 2rem;
    background-color: #ffffff;
}
.header .header-right .search_title .el-icon-search {
    font-size: 1.66667rem;
    position: relative;
    top: -2px;
    right: -5px;
    margin-top: 0;
}
.header .header-right .header-cart-num{
    background-color: #4ed6d1;
    border-radius: 0.83333rem 0.83333rem 0 0.83333rem;
    width: 1.66667rem;
    height: 1.66667rem;
    line-height: 1.66667rem;
    display: inline-block;
    position: absolute;
    top: 0.33333rem;
    right: 2.25rem;
    color: #fff;
    text-align: center;
    font-size: 1rem;
}


.tepin-subNav-zhangwei, .group-navbar-zhangwei {
    height: 3.66667rem;
}
.tepin-subNav {
    width: 100%;
    height: 3.66667rem;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
    z-index: 9;
    border-bottom: 0.08333rem solid #ddd;
}
.tepin-subNav-zhangwei .tepin-subNav {
    padding: 0.66667rem 0;
}
.tepin-subNav .product_list {
    white-space: nowrap;
    position: relative;
}
.product_list .tabs {
    padding: 0 1.25rem;
    display: inline-block;
    text-align: center;
    margin-right: -3px;
    line-height: 1.2rem;
}
.tepin-subNav .product_list .tabs .abox {
    display: inline-block;
    color: #777777;
    font-size: 1.25rem;
    padding: 0.41667rem 0.83333rem;
}
.tepin-subNav .product_list .on .abox {
    background: #4ed6d1;
    color: #ffffff;
    border-radius: 1.125rem;
}
.navbar-sort .navbar-sort-list .navbar-sort-item {
    display: inline-block;
    color: #333333;
    margin-right: 10%;
}
.tepin-subNav-zhangwei, .group-navbar-zhangwei {
    height: 3.66667rem;
}


.products {
    height: 100%;
    margin-top: 7.66667rem;
    background-color: #fff;
}
.products .product-list {
    padding: 0;
    overflow: hidden;
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
.product_article .product_name a {
    color: #222222;
}
.product_article .product_info {
    padding-top: 0.58333rem;
}
.product_article .product_info .product_price {
    font-size: 1.16667rem;
    color: #00bebf;
    float: left;
}
.product_article .product_info .product_country {
    font-size: 1rem;
    float: right;
    color: #888888;
}

.navbar-sort {
    box-sizing: border-box;
    border-bottom: 1px solid #f3f3f3;
    background-color: #fff;
    width: 100%;
    height: 3.66667rem;
    line-height: 3.66667rem;
    padding: 0 1.25rem;
    color: #333;
    font-size: 1.16667rem;
    overflow: hidden;
}
.navbar-sort .navbar-sort-list {
    box-sizing: border-box;
    width: 72.41379%;
    display: block;
    float: left;
    overflow: hidden;
}
.navbar-sort .navbar-sort-list {
    height: 3.66667rem;
}
.navbar-sort .navbar-sort-list .navbar-sort-item {
    display: inline-block;
    color: #333333;
    margin-right: 10%;
}
.navbar-sort .navbar-sort-list .navbar-sort-item.on {
    color: #00bebf;
    font-weight: bold;
    display: inline-block;
}
</style>

