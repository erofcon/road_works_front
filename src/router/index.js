import {createRouter, createWebHistory} from 'vue-router'
import WelcomePage from "@/views/WelcomePage.vue";
import CreateTask from "@/views/CreateTask.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: WelcomePage
    },
    {
        path: '/create_task',
        name: 'createTask',
        component: CreateTask
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
