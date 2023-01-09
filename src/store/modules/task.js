import {Get} from "@/api/apiroutes";

export const task = {
    namespaced: true, state: () => ({
        task: null, taskAnswers: null,
    }), mutations: {
        setTask(state, value) {
            state.task = value;
        }, setTaskAnswers(state, value) {
            state.taskAnswers = value;
        },
    }, actions: {
        getTask({commit}, {taskId}) {
            Get.getTask(taskId).then(value => {
                commit('setTask', value.data);
            }, reason => {
                console.log(reason);
            })
        }, getTaskAnswers({commit}, {taskId}) {
            Get.getAnswers(taskId).then(value => {
                commit('setTaskAnswers', value.data);
            }, reason => {
                console.log(reason);
            })
        }
    }
}