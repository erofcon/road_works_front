import {defaultApiInstance} from "@/api";
import store from "@/store";

export const Get = {
    getAllDetections() {
        const url = '/get_all_detections';
        return defaultApiInstance.get(url);
    },
}

export const Post = {
    runDetectionWithXml(description, video, xmlFile) {
        const form = new FormData();
        form.append('description', description);
        form.append('video_file', video);
        form.append('xml_file', xmlFile);

        return defaultApiInstance.post('/run_detection_with_xml', form, {
            onUploadProgress: function (progressEvent) {
                store.state.xmlDetectionUpload.uploadProgress = parseInt(
                    Math.round((progressEvent.loaded / progressEvent.total) * 100)
                )
            },
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    runDetectionWithTracker(description, video, startDatetime) {
        const form = new FormData();
        form.append('description', description);
        form.append('video_file', video);
        form.append('video_start_datetime', startDatetime);

        return defaultApiInstance.post('/run_detection_with_tracker', form, {
            onUploadProgress: function (progressEvent) {
                store.state.trackerDetectionUpload.uploadProgress = parseInt(
                    Math.round((progressEvent.loaded / progressEvent.total) * 100)
                )
            },
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
}