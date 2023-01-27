import {createRouter, createWebHistory} from 'vue-router'
import Authentication from "@/views/Authentication.vue";
import HomePage from "@/views/HomePage.vue";
import CreateTask from "@/views/CreateTask.vue";
import RunDetection from "@/views/RunDetection.vue";
import TaskView from "@/views/TaskView.vue";
import DetectionsResultList from "@/views/DetectionsResultList";
import DetectionResultView from "@/views/DetectionResultView";
import TaskList from "@/views/TaskList";
import MapView from "@/views/MapView";
import store from "@/store";
import PageNotFound from "@/views/PageNotFound";

const authGuard = function (to, from, next) {
    if (!store.state.authenticate.status.loggedIn) next({name: 'login'});
    else next()
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        beforeEnter: authGuard,
    },
    {
        path: '/create_task',
        name: 'createTask',
        component: CreateTask,
        beforeEnter: authGuard,
    },
    {
        path: '/run_detection',
        name: 'runDetection',
        component: RunDetection,
        beforeEnter: authGuard,
    },
    {
        path: '/task/:id',
        name: 'task',
        component: TaskView,
        beforeEnter: authGuard,
    },
    {
        path: '/detection_result',
        name: 'detectionResult',
        component: DetectionsResultList,
        beforeEnter: authGuard,
    },
    {
        path: '/detection_result_view/:id',
        name: 'detectionResultView',
        component: DetectionResultView,
        beforeEnter: authGuard,
    },
    {
        path: '/task_list/:tasks_type',
        name: 'TaskList',
        component: TaskList,
        beforeEnter: authGuard,
    },
    {
        path: '/map',
        name: 'MapView',
        component: MapView,
        beforeEnter: authGuard,
    },
    {
        path: '/login',
        name: 'login',
        component: Authentication,
    },
    {
        path: '/pagenotfound',
        name: 'pageNotFound',
        component: PageNotFound,
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
