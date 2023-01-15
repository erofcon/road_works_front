import {createStore} from "vuex";
import {xmlDetectionUpload} from "@/store/modules/xmlDetectionUpload";
import {trackerDetectionUpload} from "@/store/modules/trackerDetectionUpload";
import {detectionResult} from "@/store/modules/detectionResult";
import {authenticate} from "@/store/modules/authenticate";
import {createTask} from "@/store/modules/createtask";
import {task} from "@/store/modules/task";
import {taskList} from "@/store/modules/taskList";

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        xmlDetectionUpload: xmlDetectionUpload,
        trackerDetectionUpload: trackerDetectionUpload,
        detectionResult: detectionResult,
        authenticate: authenticate,
        createTask: createTask,
        task: task,
        taskList: taskList,
    },
})