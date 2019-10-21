<template>
    <div class="home">
        <top></top>

        <section class="section">
            <div class="carousel">
                <div class="block">
                    <el-carousel height="185px">
                        <el-carousel-item v-for="(item,id) in carousel" :key="id">
                            <h3><img :src="item.img" alt=""></h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>

            <div class="home_info">
                <ul>
                    <li>海外进口 <span>/</span></li>
                    <li>工厂直价 <span>/</span></li>
                    <li>原产纯品 <span>/</span></li>
                    <li>国内直邮</li>
                </ul>
            </div>

            <div class="three_img_box clear">
                <div class="three_img_left">
                    <img :src="three_img_box[0].img" alt="" >
                </div>
                <div class="three_img_right" v-for="(item,idx) in three_img_box" :key="idx">
                    <img v-if="idx === 1" :src="item.img" alt="" >
                    <img v-if="idx === 2" :src="item.img" alt="" >
                </div>
            </div>

            <div class="list_slide_shop sideslip">
                <h1>— 每周限时购 —</h1>
                <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                    <swiper-slide class="product_item" v-for="(item,idx) in main[1].data" :key="idx" slidesPerView >
                        <div class="product_img">
                            <img :src="item.coverImg" alt="">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">{{item.price}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="single_img">
                <div class="seize50" v-for="(item,idx) in main[2].data" :key="idx">
                    <img :src="item.img" alt="">
                </div>
            </div>

            <div class="list_slide_shop sideslip">
                <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                    <swiper-slide class="product_item" v-for="(item,idx) in main[3].data" :key="idx" slidesPerView >
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="" lazy="loaded">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">{{item.price}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="single_img">
                <div class="seize50" v-for="(item,idx) in main[4].data" :key="idx">
                    <img v-lazy="item.img" alt="">
                </div>
            </div>

            <div class="list_slide_shop sideslip">
                <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                    <swiper-slide class="product_item" v-for="(item,idx) in main[5].data" :key="idx" slidesPerView >
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="" lazy="loaded">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">{{item.price}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="single_img">
                <div class="seize50" v-for="(item,idx) in main[6].data" :key="idx">
                    <img v-lazy="item.img" alt="">
                </div>
            </div>
            
            <div class="list_slide_shop sideslip">
                <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                    <swiper-slide class="product_item" v-for="(item,idx) in main[7].data" :key="idx" slidesPerView >
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="" lazy="loaded">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">{{item.price}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="single_img">
                <h1>— 品牌入驻喜地 —</h1>
                <div class="seize50" v-for="(item,idx) in main[8].data" :key="idx">
                    <img v-lazy="item.img" alt="">
                </div>
            </div>

            <div class="list_slide_shop sideslip">
                <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                    <swiper-slide class="product_item" v-for="(item,idx) in main[9].data" :key="idx" slidesPerView >
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="" lazy="loaded">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">{{item.price}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="single_img">
                <div class="seize50" v-for="(item,idx) in main[10].data" :key="idx">
                    <img v-lazy="item.img" alt="">
                </div>
            </div>

            <div class="list_slide_shop sideslip">
                <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                    <swiper-slide class="product_item" v-for="(item,idx) in main[11].data" :key="idx" slidesPerView >
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="" lazy="loaded">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">{{item.price}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="single_img">
                <div class="seize50" v-for="(item,idx) in main[12].data" :key="idx">
                    <img v-lazy="item.img" alt="">
                </div>
            </div>

            <div class="list_slide_shop sideslip">
                <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                    <swiper-slide class="product_item" v-for="(item,idx) in main[13].data" :key="idx" slidesPerView >
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="" lazy="loaded">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">{{item.price}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="single_img">
                <div class="seize50" v-for="(item,idx) in main[14].data" :key="idx">
                    <img v-lazy="item.img" alt="">
                </div>
            </div>

            <div class="list_slide_shop sideslip">
                <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                    <swiper-slide class="product_item" v-for="(item,idx) in main[15].data" :key="idx" slidesPerView >
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="" lazy="loaded">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">{{item.price}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="single_img">
                <h1>— 生活方案专场 —</h1>
                <div class="seize50" v-for="(item,idx) in main[16].data" :key="idx">
                    <img v-lazy="item.img" alt="">
                </div>
            </div>

            <div class="list_slide_shop sideslip">
                <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                    <swiper-slide class="product_item" v-for="(item,idx) in main[17].data" :key="idx" slidesPerView >
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="" lazy="loaded">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">{{item.price}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="single_img">
                <div class="seize50" v-for="(item,idx) in main[18].data" :key="idx">
                    <img v-lazy="item.img" alt="">
                </div>
            </div>

            <div class="list_slide_shop sideslip">
                <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                    <swiper-slide class="product_item" v-for="(item,idx) in main[19].data" :key="idx" slidesPerView >
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="" lazy="loaded">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">{{item.price}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="single_img">
                <div class="seize50" v-for="(item,idx) in main[20].data" :key="idx">
                    <img v-lazy="item.img" alt="">
                </div>
            </div>

            <div class="list_slide_shop sideslip">
                <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                    <swiper-slide class="product_item" v-for="(item,idx) in main[21].data" :key="idx" slidesPerView >
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="" lazy="loaded">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">{{item.price}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="single_img">
                <div class="seize50" v-for="(item,idx) in main[22].data" :key="idx">
                    <img v-lazy="item.img" alt="">
                </div>
            </div>

            <div class="list_slide_shop sideslip">
                <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                    <swiper-slide class="product_item" v-for="(item,idx) in main[23].data" :key="idx" slidesPerView >
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="" lazy="loaded">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">{{item.price}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="single_img">
                <div class="seize50" v-for="(item,idx) in main[24].data" :key="idx">
                    <img v-lazy="item.img" alt="">
                </div>
            </div>

            <div class="list_slide_shop sideslip">
                <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                    <swiper-slide class="product_item" v-for="(item,idx) in main[25].data" :key="idx" slidesPerView >
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="" lazy="loaded">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">{{item.price}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="single_img">
                <div class="seize50" v-for="(item,idx) in main[26].data" :key="idx">
                    <img v-lazy="item.img" alt="">
                </div>
            </div>

            <div class="list_slide_shop sideslip">
                <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                    <swiper-slide class="product_item" v-for="(item,idx) in main[27].data" :key="idx" slidesPerView >
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="" lazy="loaded">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">{{item.price}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="single_img">
                <div class="seize50" v-for="(item,idx) in main[28].data" :key="idx">
                    <img v-lazy="item.img" alt="">
                </div>
            </div>

            <div class="list_slide_shop sideslip">
                <swiper ref="mySwiper" class="product_list" :options="swiperOption">
                    <swiper-slide class="product_item" v-for="(item,idx) in main[29].data" :key="idx" slidesPerView >
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="" lazy="loaded">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">{{item.price}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="list_one_shop">
                <h1>— 出游好物 —</h1>
                <ul class="product_list clear">
                    <li class="product_item" v-for="(item,idx) in main[30].data" :key="idx">
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name1">{{item.slogan}}</h2>
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">￥{{item.price}}</p>
                            <div class="shop_introduce">
                                <span class="user_info">
                                    <img v-lazy="item.icon" alt="">
                                </span>
                                <span class="user_comment">{{item.comment}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div class="list_one_shop">
                <h1>— 野外郊游 —</h1>
                <ul class="product_list clear">
                    <li class="product_item" v-for="(item,idx) in main[31].data" :key="idx">
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name1">{{item.slogan}}</h2>
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">￥{{item.price}}</p>
                            <div class="shop_introduce">
                                <span class="user_info">
                                    <img v-lazy="item.icon" alt="">
                                </span>
                                <span class="user_comment">{{item.comment}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="list_one_shop">
                <h1>— 孝敬父母 —</h1>
                <ul class="product_list clear">
                    <li class="product_item" v-for="(item,idx) in main[31].data" :key="idx">
                        <div class="product_img">
                            <img v-lazy="item.coverImg" alt="">
                        </div>
                        <div class="product_article">
                            <h2 class="product_name1">{{item.slogan}}</h2>
                            <h2 class="product_name">{{item.name}}</h2>
                            <p class="product_price">￥{{item.price}}</p>
                            <div class="shop_introduce">
                                <span class="user_info">
                                    <img v-lazy="item.icon" alt="">
                                </span>
                                <span class="user_comment">{{item.comment}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="single_list_shop">
                <h1>— 纺织床品 —</h1>
                <ul class="product_list clear">
                    <li class="product_item" v-for="(item,idx) in main[33].data" :key="idx">
                        <div class="product_box">
                            <div class="product_img">
                                <img v-lazy="item.coverImg" alt="">
                            </div>
                            <div class="product_article" style="position: relative; height: 116px;">
                                <h2 class="product_name">{{item.name}}</h2>
                                <div class="clear product_info">
                                    <p class="product_price">￥{{item.price}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="single_list_shop">
                <h1>— 餐桌美学 —</h1>
                <ul class="product_list clear">
                    <li class="product_item" v-for="(item,idx) in main[34].data" :key="idx">
                        <div class="product_box">
                            <div class="product_img">
                                <img v-lazy="item.coverImg" alt="">
                            </div>
                            <div class="product_article" style="position: relative; height: 116px;">
                                <h2 class="product_name">{{item.name}}</h2>
                                <div class="clear product_info">
                                    <p class="product_price">￥{{item.price}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="single_list_shop">
                <h1>— 美食达人 —</h1>
                <ul class="product_list clear">
                    <li class="product_item" v-for="(item,idx) in main[35].data" :key="idx">
                        <div class="product_box">
                            <div class="product_img">
                                <img v-lazy="item.coverImg" alt="">
                            </div>
                            <div class="product_article" style="position: relative; height: 116px;">
                                <h2 class="product_name">{{item.name}}</h2>
                                <div class="clear product_info">
                                    <p class="product_price">￥{{item.price}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="single_list_shop">
                <h1>— 酒具庄园 —</h1>
                <ul class="product_list clear">
                    <li class="product_item" v-for="(item,idx) in main[36].data" :key="idx">
                        <div class="product_box">
                            <div class="product_img">
                                <img v-lazy="item.coverImg" alt="">
                            </div>
                            <div class="product_article" style="position: relative; height: 116px;">
                                <h2 class="product_name">{{item.name}}</h2>
                                <div class="clear product_info">
                                    <p class="product_price">￥{{item.price}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="single_list_shop">
                <h1>— 清洁帮手 —</h1>
                <ul class="product_list clear">
                    <li class="product_item" v-for="(item,idx) in main[37].data" :key="idx">
                        <div class="product_box">
                            <div class="product_img">
                                <img v-lazy="item.coverImg" alt="">
                            </div>
                            <div class="product_article" style="position: relative; height: 116px;">
                                <h2 class="product_name">{{item.name}}</h2>
                                <div class="clear product_info">
                                    <p class="product_price">￥{{item.price}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="single_list_shop">
                <h1>— 服装配饰 —</h1>
                <ul class="product_list clear">
                    <li class="product_item" v-for="(item,idx) in main[38].data" :key="idx">
                        <div class="product_box">
                            <div class="product_img">
                                <img v-lazy="item.coverImg" alt="">
                            </div>
                            <div class="product_article" style="position: relative; height: 116px;">
                                <h2 class="product_name">{{item.name}}</h2>
                                <div class="clear product_info">
                                    <p class="product_price">￥{{item.price}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="single_list_shop">
                <h1>— 卫浴法则 —</h1>
                <ul class="product_list clear">
                    <li class="product_item" v-for="(item,idx) in main[39].data" :key="idx">
                        <div class="product_box">
                            <div class="product_img">
                                <img v-lazy="item.coverImg" alt="">
                            </div>
                            <div class="product_article" style="position: relative; height: 116px;">
                                <h2 class="product_name">{{item.name}}</h2>
                                <div class="clear product_info">
                                    <p class="product_price">￥{{item.price}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="single_list_shop">
                <h1>— 儿童乐园 —</h1>
                <ul class="product_list clear">
                    <li class="product_item" v-for="(item,idx) in main[40].data" :key="idx">
                        <div class="product_box">
                            <div class="product_img">
                                <img v-lazy="item.coverImg" alt="">
                            </div>
                            <div class="product_article" style="position: relative; height: 116px;">
                                <h2 class="product_name">{{item.name}}</h2>
                                <div class="clear product_info">
                                    <p class="product_price">￥{{item.price}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="single_list_shop">
                <h1>— 办公用品 —</h1>
                <ul class="product_list clear">
                    <li class="product_item" v-for="(item,idx) in main[41].data" :key="idx">
                        <div class="product_box">
                            <div class="product_img">
                                <img v-lazy="item.coverImg" alt="">
                            </div>
                            <div class="product_article" style="position: relative; height: 116px;">
                                <h2 class="product_name">{{item.name}}</h2>
                                <div class="clear product_info">
                                    <p class="product_price">￥{{item.price}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="single_list_shop">
                <h1>— 可爱猫咪 —</h1>
                <ul class="product_list clear">
                    <li class="product_item" v-for="(item,idx) in main[42].data" :key="idx">
                        <div class="product_box">
                            <div class="product_img">
                                <img v-lazy="item.coverImg" alt="">
                            </div>
                            <div class="product_article" style="position: relative; height: 116px;">
                                <h2 class="product_name">{{item.name}}</h2>
                                <div class="clear product_info">
                                    <p class="product_price">￥{{item.price}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="single_list_shop">
                <h1>— 猜你喜欢 —</h1>
                <ul class="product_list clear">
                    <li class="product_item" v-for="(item,idx) in main[43].data" :key="idx">
                        <div class="product_box">
                            <div class="product_img">
                                <img v-lazy="item.coverImg" alt="" :key="item.coverImg">
                            </div>
                            <div class="product_article" style="position: relative; height: 116px;">
                                <h2 class="product_name">{{item.name}}</h2>
                                <div class="clear product_info">
                                    <p class="product_price">￥{{item.price}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="more_shop">
                    查看更多
                    <i>></i>
                </div>
            </div>


            <footer class="footer">
                <section class="foot-link clear">
                    <div class="foot-link-left">
                        <a href="javascript:;">首页</a> / 
                        <a href="javascript:;">电脑版</a> / 
                        <a href="javascript:;">联系客服</a>
                    </div>
                </section>
                <p class="copyright">© 2019 喜地电子商务有限公司 版权所有</p>
            </footer>

        </section>

        <backtop></backtop>

        <footerTab />
    </div>
</template>


<script>
import 'swiper/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import top from '../components/header.vue'
import backtop from '../components/backPageTop.vue'
import footerTab from '../components/footer.vue'
export default {
    data(){
        return{
            carousel:[],
            three_img_box:[],
            main:[],
            swiperOption:{
                slidesPerView : 3
            }
        }
    },
    async created(){
        // const homedata = await this.$axios(
        //     'https://api.m.xidibuy.com/v2/index/home'
        // )
        const dbdata = await this.$axios(
            'http://10.3.133.74:4321/home'
        )
        this.carousel = dbdata.data[0].data.slide
        this.three_img_box = dbdata.data[0].data.modules[0].data
        this.main = dbdata.data[0].data.modules
        // window.console.log(dbdata.data[0].data)
    },
    components: {
        swiper,
        swiperSlide,
        top,
        backtop,
        footerTab
    }

}
</script>

<style>
.clear::after{
    content: '';
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    clear: both;
}
.home{
    width: 100%;
    overflow-x: hidden;
    margin-bottom: 4.166667rem
}

/* -------轮播-------  */

.carousel img{
    width: 100%;
}
.el-carousel__indicator--horizontal{
    width: 5px;
    height: 5px;
    padding: 10px 4px;
}
.el-carousel__button{
    width: 100%;
    height: 5px;
    border-radius: 5px
}

/* -------轮播结束-------  */

.home_info{
    border-bottom: 9px solid #F0F0F0
}
.home_info ul{
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid #dddddd;
}
.home_info ul li{
    height: 3.33333rem;
    width: 25%;
    text-align: center;
    line-height: 3.33333rem;
    font-size: 1.08333rem;
    color: #00bebf;
    position: relative;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}
.home_info ul li span{
    color: #dddddd;
    position: absolute;
    right: 1px;
}

.three_img_box{
    padding: 0 0.83333rem 0.83333rem 0.83333rem;
}
.three_img_box .three_img_left{
    float: left;
    width: 46%;
}
.three_img_box img{
    width: 100%;
}
.three_img_box .three_img_right{
    float: left;
    width: 54%;
    box-sizing: border-box;
    padding-left: 1.5%;
}


.list_slide_shop{
    padding-bottom: 0.83333rem;
}
.list_slide_shop h1 , .single_img h1 , .list_one_shop h1 , .single_list_shop h1 {
    padding: 0.83333rem 0 1.66667rem 0;
    font-size: 1.41667rem;
    text-align: center;
    width: 100%;
}
.list_slide_shop .product_list {
    white-space: nowrap;
}
.list_slide_shop .product_list .product_item {
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 34%;
    padding-left: 0.83333rem;
    vertical-align: top;
}
.list_slide_shop .product_list .product_item .product_img {
    height: 0;
    position: relative;
    font-size: 0;
    padding-bottom: 100%;
    overflow: hidden;
    text-align: center;
}
.product_img img{
    width: 9.583333rem;
}
.list_slide_shop .product_list .product_item .product_article{
    padding: 0 0.41667rem 0.83333rem 0.41667rem;
}
.product_article .product_name{
    padding-top: 0.83333rem;
    white-space: normal;
    line-height: 1.5;
    height: 3rem;
    overflow: hidden;
    width: 100%;
}
.product_article .product_price{
    font-size: 1.08333rem;
    padding-top: 0.66667rem;
    color: #00bebf;
}

.single_img {
    width: 100%;
    padding-bottom: 1.666667rem;
    overflow: hidden;
}
.seize50 {
    height: 0;
    position: relative;
    font-size: 0;
    padding-bottom: 50%;
    overflow: hidden;
}
.single_img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.list_one_shop {
    padding-bottom: 0.83333rem;
}
.list_one_shop ul {
    padding: 0 0.83333rem;
}
.list_one_shop ul .product_item {
    height: 10.83333rem;
    padding: 0;
    margin: 0;
    padding-bottom: 1.66667rem;
    width: 100%;
    boder: none !important;
}
.list_one_shop ul .product_item .product_img {
    width: 10rem;
    height: 10rem;
    float: left;
    text-align: center;
    position: relative;
}
.list_one_shop ul .product_item .product_img img {
    width: 100%;
}
.list_one_shop ul .product_article {
    padding-left: 0.83333rem;
}
.product_item .product_article {
    overflow: hidden;
}
.list_one_shop ul .product_article .product_name1 {
    display: block;
    font-size: 1.16667rem;
    font-weight: bold;
    height: 1.5rem;
    line-height: 1.5rem;
    white-space: nowrap;
    -webkit-line-clamp: 1;
    -webkit-line-clamp--webkit-box-orient: vertical;
}
.list_one_shop ul .product_article .product_name {
    display: block;
    padding-top: 0.66667rem;
    font-size: 1rem;
}
.list_one_shop ul .product_article .product_price {
    padding-top: 0.66667rem;
    font-size: 1.16667rem;
    color: #00bebf;
}
.list_one_shop ul .product_article .shop_introduce {
    padding-top: 1.08333rem;
    position: relative;
}
.list_one_shop ul .product_article .shop_introduce .user_info {
    display: block;
    width: 2.08333rem;
    height: 2.08333rem;
    float: left;
    border-radius: 1.5rem;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 7px;
}
.list_one_shop ul .product_article .shop_introduce .user_info img {
    width: 100%;
}
.list_one_shop ul .product_article .shop_introduce .user_comment {
    display: block;
    padding-left: 2.91667rem;
    color: #777777;
    font-size: 1rem;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.single_list_shop ul.product_list {
    margin-right: -1px;
    border-top: 1px solid #f3f3f3;
}
.single_list_shop ul.product_list .product_item {
    width: 50%;
    border-bottom: 1px solid #f3f3f3;
    border-right: 1px solid #f3f3f3;
    display: block;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.single_list_shop ul.product_list .product_item .product_box {
    padding: 0.83333rem;
}
.single_list_shop ul.product_list .product_item .product_box .product_img {
    height: 0;
    position: relative;
    font-size: 0;
    padding-bottom: 100%;
    overflow: hidden;
    text-align: center;
}
.single_list_shop ul.product_list .product_item .product_box .product_img img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.single_list_shop ul.product_list .product_article .product_name {
    padding-top: 0.58333rem;
    font-size: 1rem;
    display: block;
    overflow: hidden;
    line-height: 1.5;
    height: 3rem;
    overflow: hidden;
}
.single_list_shop ul.product_list .product_article .product_info {
    padding-top: 0.58333rem;
}
.single_list_shop ul.product_list .product_article .product_info .product_price {
    font-size: 1.16667rem;
    color: #00bebf;
    float: left;
}
.single_list_shop .more_shop {
    background-color: #F0F0F0;
    line-height: 3.83333rem;
    text-align: center;
    font-size: 1.25rem;
    color: #222222;
    margin-bottom: 0.83333rem;
}
footer.footer{
    background-color: #fff;
    position: relative;
    bottom: 0;
    overflow: hidden;
    text-align: center;
}
footer.footer .foot-link {
    padding-top: 1.25rem;
}
footer.footer .foot-link .foot-link-left{
    width: 100%;
    color: #dddddd;
}
footer.footer .foot-link .foot-link-left a{
    display: inline-block;
    padding: 0 0.83333rem;
    color: #777777;
}
footer.footer .copyright{
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    text-align: center;
    color: #c5c5c5;
    font-size: 0.91667rem;
}

.icon-box {
    background-color: rgba(0,0,0,.3);
    width: 3.33333rem;
    height: 3.33333rem;
    border-radius: 50%;
    color: #fff;
    text-align: center;
}
.icon-box .icon {
    font-size: 2.08333rem;
    line-height: 3.33333rem;
}
.icon {
    font-size: 2.08333rem;
    font-family: xidi;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    font-weight: 400;
    font-style: normal;
    speak: none;
    text-decoration: inherit;
    text-transform: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


</style>
