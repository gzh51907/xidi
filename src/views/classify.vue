<template>
    <div class="classsify">
        <div class="main">
            <header class="header headFixed">
                <div class="headerBox">
                    <div class="search_title" style="margin-left: 0px;">
                        <i class="icon el-icon-search"></i>
                        <div class="title_box">去喜地，逛世界</div>
                    </div>
                </div>
            </header>

            <section class="contentbox">
                <div class="left_nav">
                    <ul class="clear">
                        <li v-for="(item,idx) in nav" :key="idx" :class="{on:idx === i}" @click="i = idx">{{item.name}}</li>
                    </ul>
                </div>

                <div class="rightall" style="width:285px" v-for="(item,idx) in nav" :key="idx" v-show="idx === i">
                    <div class="right_nav" style="transition: all 0ms ease 0s; transform: translate3d(0px, 0px, 0px);">
                        <ul class="clear">
                            <li v-for="(items,index) in item.children" :key="index" @click="$router.push('goodlist')">
                                <div class="right_nav_box">
                                    <img :src="items.image" alt="">
                                </div>
                                <div class="right_nav_box">{{items.name}}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <footerTab></footerTab>

        </div>
    </div>
</template>

<script>
import footerTab from '../components/footer.vue'
export default {
    data(){
        return{
            i:0,
            nav:[],
            item:2
        }
    },
    async created(){
        const data = await this.$axios(
            'http://10.3.133.74:4321/categoryNav'
        )
        this.nav = data.data[0].data.cats;
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
.headFixed {
    position: fixed;
    top: 0;
    z-index: 995;
}
.search_title {
    display: block;
    margin-left: 20px;
    background-color: #f5f5f5;
    height: 28px;
    border-radius: 4px;
    position: relative;
    top: 11px;
    line-height: 28px;
    text-align: left;
    color: #7f7f7f;
    font-size: 12px;
    padding-left: 6.5px;
}
.search_title .title_box {
    display: inline-block;
    max-width: 90%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.search_title .icon {
    line-height: 28px;
    font-size: 17px;
    float: left;
    width: 25px;
    margin-right: 5px;
    color: #7f7f7f;
}


.contentbox {
    padding-top: 4rem;
    position: relative;
    height: 100%;
    overflow: hidden;
}
.left_nav {
    width: 7.5rem;
    float: left;
    background-color: #f3f3f3;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 4.16667rem;
}
.left_nav ul li {
    display: block;
    height: 5.41667rem;
    text-align: center;
    line-height: 5.41667rem;
    font-size: 1.16667rem;
}
.left_nav ul li.on {
    font-size: 1.33333rem;
    background-color: #ffffff;
    color: #00bebf;
}


.rightall {
    height: 100%;
    overflow: hidden;
    position: fixed;
    right: 0;
}
.rightall .right_nav {
    height: 100%;
    padding-left: 2.08333rem;
    position: absolute;
    top: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #ffffff;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.rightall .right_nav ul {
    padding-top: 0.83333rem;
    padding-bottom: 8.33333rem;
}
.rightall .right_nav ul li {
    width: 33.33%;
    float: left;
    display: block;
    text-align: center;
    padding-right: 2.08333rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 1.66667rem;
    padding-bottom: 0.83333rem;
}
.rightall .right_nav ul li {
    width: 33.33%;
    float: left;
    display: block;
    text-align: center;
    padding-right: 2.08333rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 1.66667rem;
    padding-bottom: 0.83333rem;
}
.rightall .right_nav ul .right_nav_box {
    width: 100%;
    height: 0;
    position: relative;
    font-size: 0;
    padding-bottom: 100%;
    overflow: hidden;
}
.rightall .right_nav ul .right_nav_box img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.rightall .right_nav ul .right_nav_box + .right_nav_box {
    width: 100%;
    height: 37px;
    padding-bottom: 0;
    font-size: 1.08333rem;
    padding-top: 0.83333rem;
}
</style>
