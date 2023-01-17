import {defaultApiInstance} from "@/api";
import store from "@/store";

export const Get = {
    getAllDetections() {
        const url = '/get_all_detections';
        return defaultApiInstance.get(url);
    }, getDetectionImages(detectionId) {
        const url = '/get_detection_images';
        return defaultApiInstance.get(url, {
            params: {'detection_id': detectionId}
        })
    }, getRelatedGroups() {
        const url = '/related_groups';
        return defaultApiInstance.get(url);
    }, getRelatedExecutorUsers(groupId) {
        const url = '/get_related_executor_users';
        return defaultApiInstance.get(url, {
            params: {'group_id': groupId}
        });
    }, getTask(taskID) {
        const url = '/get_task';

        return defaultApiInstance.get(url, {
            params: {'task_id': taskID}
        });
    }, getAnswers(taskID) {
        const url = '/get_answers';

        return defaultApiInstance.get(url, {
            params: {'task_id': taskID}
        });
    }, closeTask(taskID) {
        const url = '/close_task';

        return defaultApiInstance(url, {
            params: {'task_id': taskID}
        });
    }, getCurrentTasks(page = 1, size = 10) {
        const url = '/current_tasks';

        return defaultApiInstance(url, {
            params: {page, size}
        })

    },
    getExpiredTasks(page = 1, size = 10) {
        const url = '/expired_tasks';

        return defaultApiInstance(url, {
            params: {page, size}
        })

    },
    getDoneTasks(page = 1, size = 10) {
        const url = '/done_tasks';

        return defaultApiInstance(url, {
            params: {page, size}
        })

    },
    getAllTasks(page = 1, size = 10) {
        const url = '/all_tasks';

        return defaultApiInstance(url, {
            params: {page, size}
        })

    },
    getGeoJsonDoneTasks(page = 1, size = 10) {
        const url = '/get_geo_json_done_tasks';
        return defaultApiInstance(url);
    },
    getDoneTaskWithLocation(latitude, longitude) {
        const url = '/get_done_task_with_location';
        return defaultApiInstance(url, {
            params: {
                latitude: latitude,
                longitude: longitude,
            }
        });
    },
}

export const Post = {
    getToken(data) {
        const url = '/token';
        return defaultApiInstance.post(url, data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
    },

    runDetectionWithXml(description, video, xmlFile) {
        const form = new FormData();
        form.append('description', description);
        form.append('video_file', video);
        form.append('xml_file', xmlFile);

        return defaultApiInstance.post('/run_detection_with_xml', form, {
            onUploadProgress: function (progressEvent) {
                store.state.xmlDetectionUpload.uploadProgress = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100))
            }, headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    runDetectionWithTracker(description, video, startDatetime) {
        const form = new FormData();
        form.append('description', description);
        form.append('video_file', video);
        form.append('video_start_datetime', startDatetime.toISOString().slice(0, -1));

        return defaultApiInstance.post('/run_detection_with_tracker', form, {
            onUploadProgress: function (progressEvent) {
                store.state.trackerDetectionUpload.uploadProgress = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100))
            }, headers: {'Content-Type': 'multipart/form-data'}
        })
    },

    createTask(description, expireDatetime, latitude, longitude, groupID, executorID, files) {
        const form = new FormData();
        form.append('description', description);
        form.append('lead_datetime', expireDatetime.toISOString().slice(0, -1));
        form.append('latitude', latitude ?? '');
        form.append('longitude', longitude ?? '');
        form.append('executor_id', executorID);
        form.append('group_id', groupID);

        if (files) {
            for (let i = 0; i < files.length; i++) {
                form.append('files', files[i]);
            }
        }

        return defaultApiInstance.post('/create_task', form, {headers: {'Content-Type': 'multipart/form-data'}})
    },

    deleteDetectionImage(detectionImageId) {
        const form = new FormData()
        form.append('detection_image_id', detectionImageId)
        return defaultApiInstance.post('/delete_detection_images', form, {headers: {'Content-Type': 'multipart/form-data'}})
    },

    createAnswer(description, files, taskID) {
        const form = new FormData();
        form.append('description', description);
        form.append('task_id', taskID);

        if (files) {
            for (let i = 0; i < files.length; i++) {
                form.append('files', files[i]);
            }
        }

        return defaultApiInstance.post('/create_answer', form, {headers: {'Content-Type': 'multipart/form-data'}})
    },
}