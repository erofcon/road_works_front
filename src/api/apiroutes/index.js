import {defaultApiInstance} from "@/api";
import store from "@/store";
import "./api_names";

export const Get = {}

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
    }
}