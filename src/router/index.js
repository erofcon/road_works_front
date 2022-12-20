import {createRouter, createWebHistory} from 'vue-router'
import WelcomePage from "@/views/WelcomePage.vue";
import CreateTask from "@/views/CreateTask.vue";
import UserView from "@/views/UserView";
import RunDetection from "@/views/RunDetection";
import DetectionsPage from "@/views/DetectionsPage";
import DetectionsResult from "@/views/DetectionsResult";

const routes = [
    {
        path: '/',
        name: 'home',
        component: WelcomePage,
    },
    {
        path: '/create_task',
        name: 'createTask',
        component: CreateTask,
    },
    {
        path: '/user/:id',
        name: 'user',
        component: UserView,
    },
    {
        path: '/run_detection',
        name: 'runDetection',
        component: RunDetection,
    },
    {
        path: '/detections',
        name: 'detectionsPage',
        component: DetectionsPage,
    },
    {
        path: '/detection_view/:id',
        name: 'detectionView',
        component: DetectionsResult
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
