import {createRouter, createWebHistory} from 'vue-router'
import Authentication from "@/views/Authentication.vue";
import HomePage from "@/views/HomePage.vue";
import CreateTask from "@/views/CreateTask.vue";
import RunDetection from "@/views/RunDetection.vue";
import TaskView from "@/views/TaskView.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/create_task',
        name: 'createTask',
        component: CreateTask,
    },
    {
        path: '/run_detection',
        name: 'runDetection',
        component: RunDetection,
    },
    {
        path: '/task/:id',
        name: 'task',
        component: TaskView,
    },
    {
        path: '/login',
        name: 'login',
        component: Authentication,
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }

});

export default router
