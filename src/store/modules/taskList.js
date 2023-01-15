import {Get} from "@/api/apiroutes";

export const taskList = {
    namespaced: true,
    state: () => ({
        tasks: null,
    }),
    mutations: {
        setTasks(state, value) {
            if (state.tasks) {
                state.tasks.items = [...state.tasks.items, ...value.items]
            } else {
                state.tasks = value;
            }
        },
        clearTasks(state) {
            if (state.tasks) {
                state.tasks.items = [];
            }
        }
    },

    actions: {
        getCurrentTasks({commit}, page = 1) {
            Get.getCurrentTasks(page).then(value => {
                commit('setTasks', value.data);
            }, reason => {
                console.log(reason);
            })
        },
        getExpiredTasks({commit}, page = 1) {
            Get.getExpiredTasks(page).then(value => {
                commit('setTasks', value.data);
            }, reason => {
                console.log(reason);
            })
        },
        getDoneTasks({commit}, page = 1) {
            Get.getDoneTasks(page).then(value => {
                commit('setTasks', value.data);
            }, reason => {
                console.log(reason);
            })
        },
        getAllTasks({commit}, page = 1) {
            Get.getAllTasks(page).then(value => {
                commit('setTasks', value.data);
            }, reason => {
                console.log(reason);
            })
        },
    }
}