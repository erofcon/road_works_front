import {createStore} from "vuex";
import {xmlDetectionUpload} from "@/store/modules/xmlDetectionUpload";
import {trackerDetectionUpload} from "@/store/modules/trackerDetectionUpload";
import {detectionResult} from "@/store/modules/detectionResult";

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        xmlDetectionUpload: xmlDetectionUpload,
        trackerDetectionUpload: trackerDetectionUpload,
        detectionResult: detectionResult,
    },
})