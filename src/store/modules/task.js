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
        appendTaskAnswer(state, value) {
            if (state.taskAnswers) {
                state.taskAnswers.push(value)
            } else {
                state.taskAnswers = value
            }
        },
        changeTaskStatus(state) {
            if (state.task) {
                state.task.task_status = 'is_done';
            }
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
        },
    }
}