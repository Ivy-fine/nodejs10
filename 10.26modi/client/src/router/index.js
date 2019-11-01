import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/list",
        name: "list",
        component: () => import("../views/list.vue")
    },
    {
        path: "/detail",
        name: "detail",
        component: () => import("../views/detail.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login.vue")
    },
    {
        path: "/addBlog",
        name: "addBlog",
        component: () => import("../views/addBlog.vue")
    },
    {
        path: "/",
        redirect: "/list"
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
