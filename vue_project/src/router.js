import Vue from "vue"
import Router from "vue-router"
import RouterSecurity from '@/store/modules/auth/router_security'

Vue.use(Router);

let router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        //Menu for admin page
        {
            path: "/login",
            name: "login",
            component: () => import('@/views/login/Login.vue'),
        },

        //Admin views
        {
            path: "/admin",
            name: "admin",
            component: () => import('@/layouts/Admin.vue'),
            children: [

                //Dashboard
                {
                    path: "dashboard", name: "dashboard",
                    component: () => import('@/views/admin/dashboard/Index.vue')
                },           

                //Client views
                {
                    path: "client", name: "client",
                    component: () => import('@/layouts/Intermediate.vue'),
                    children: [
                        {
                            path: "/", name: "client_grid",
                            component: () => import('@/views/admin/client/Grid.vue')
                        },              
                        {
                            path: "editorcrate/:id?", name: "client_form",
                            component: () => import('@/views/admin/client/Form.vue')
                        },                         
                    ]
                },

            ]
        },

        {
            path: '*',
            name: '404_page',
            component: () => import('@/views/404/404_page')     
        }
    ]
});

router.beforeEach((to, from, next) => {    
    RouterSecurity.checkUserAuth(to, from, next);
    window.scrollTo(0, 0);
});

export default router;
