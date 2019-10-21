<template>
    <section class="foot_tab clear">
            <ul>
                <li id="home" @click="clickItem('/')">
                    <div class="link oversea-origin" :class="{on: $route.path === '/'}">
                        <i class="icon icon_homenew_on el-icon-s-home"></i>
                        <div>首页</div>
                    </div>
                </li>
                <li id="country"  @click="clickItem('country')">
                    <div class="link factory-parity" :class="{on: $route.path === '/country'}">
                        <i class="icon icon_country2 el-icon-s-flag"></i>
                        <div>国家馆</div>
                    </div>
                </li>
                <li id="classify" @click="clickItem('classify')">
                    <div class="link certified-products" :class="{on: $route.path === '/classify'}">
                        <i class="icon icon_classification el-icon-menu"></i>
                        <div>分类</div>
                    </div>
                </li>
                <li id="cart" @click="clickItem('cart')">
                    <div class="link shanghai-postal" :class="{on: $route.path === '/cart'}">
                        <i class="icon icon_Cart el-icon-shopping-cart-full"></i>
                        <div>购物车</div>
                    </div>
                </li>
                <li id="mine" @click="clickItem('mine')">
                    <div class="link shanghai-postal" :class="{on: $route.path === '/mine'}">
                        <i class="icon icon_me_unselected el-icon-s-custom"></i>
                        <div>我</div>
                    </div>
                </li>
            </ul>
        </section>
</template>

<script>
export default {
    methods:{
        clickItem(path){
            this.$router.push(path);
        }
    }
}
</script>

<style scoped>
.foot_tab {
    width: 100%;
    position: fixed;
    height: 3.33333rem;
    border: 1px solid #dddddd;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    z-index: 100;
    padding: 0.41667rem 0;
}
.foot_tab li {
    display: block;
    float: left;
    width: 20%;
    text-align: center;
}
.foot_tab li .link.on {
    color: #00bebf;
}
.foot_tab li .link {
    display: inline-block;
    color: #777777;
}
.foot_tab li .link.on .icon {
    color: #00bebf;
}
.foot_tab li .link .icon {
    vertical-align: top;
    display: inline-block;
}
</style>

