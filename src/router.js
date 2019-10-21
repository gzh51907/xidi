import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import mine from './views/mine.vue'
import login from './views/login.vue'
import detail from './views/detail.vue'
import register from './views/register'
import classify from './views/classify'
import goodlist from './views/goodlist'
import cart from './views/cart'

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: home,
    },{
        path: '/mine',
        name: 'mine',
        component: mine
    },{
        path: '/login',
        name: 'login',
        component: login
    },{
        path: '/detail:id',
        name: 'detail',
        component: detail
    },{
        path: '/register',
        name: 'register',
        component: register
    },{
        path: '/classify',
        name: 'classify',
        component: classify
    },{
        path: '/goodlist',
        name: 'goodlist',
        component: goodlist
    },{
        path: '/cart',
        name: 'cart',
        component: cart,
        meta: {
            requiresAuth: true 
        }
    }
    ]
})

router.beforeEach(function(to,from,next){
    if(to.meta.requiresAuth){
        let Authorization = localStorage.getItem('Authorization');
        if(Authorization){
            next();
        }else{
            router.push({
                name:'login',
                query:{
                    targeturl:to.fullPath
                }
            })
        }
    }else{
        next();
    }
})

export default router;