import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import Home from '../components/home'
import About from '../components/about'
import User from '../components/user-miaov'
import NotFound from '../components/404';

// import Vip from '../components/vip'
// import Comm from '../components/comm'
// import Money from '../components/money'

//写构造函数，配置参数
let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name:'Home',       //当前路由信息对象的名字
            component: Home
        },
        {
            path: '/about',
            name:'About',
            component: About
        },
        {
            path: '/user/:id?',  // :就是动态路径 id就类似是变量一样，存访问路径的值   /user/123
            name:'User',
            component: User
            // children:[
            //     {
            //         path:'vip',
            //         name:'Vip',
            //         component:Vip
            //     },
            //     {
            //         path:'comm',
            //         name:'Comm',
            //         component:Comm
            //     },
            //     {
            //         path:'money',
            //         name:'Money',
            //         component:Money
            //     }
            // ]
        },
        // {
        //     path: '*',
        //     // component: Home,
        //     redirect: function (to) {
        //         // console.log(to)
        //         if (to.path === '/abc') {
        //             return '/home'
        //         }else if(to.path === '/miaov'){
        //             return {
        //                 name:'About'
        //             } 
        //         }else{
        //             return '/user'
        //         }
        //     }
        // }
    
    ]
})

export default router


