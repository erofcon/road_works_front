import {Get, Post} from "@/api/apiroutes";

export const detectionResult = {
    namespaced: true,
    state: () => ({
        detectionImages: [],
        oneSelectImage: null,
        selectedImage: [],
    }),
    mutations: {
        setDetectionImages(state, value) {
            state.detectionImages = value;
        },
        setSelectOneSelectImage(state, value) {
            state.oneSelectImage = value;
        },
        setSelectedImages(state, value) {
            state.selectedImage = value;
        },
        deleteImages(state) {
            for (let i in state.selectedImage) {
                state.detectionImages = state.detectionImages.filter(value => value.id !== state.selectedImage[i].id)
            }

            state.selectedImage = [];
            state.oneSelectImage = null;
        },
        resetStore(state) {
            state.detectionImages = [];
            state.oneSelectImage = null;
            state.selectedImage = [];
        },
    },
    actions: {
        getDetectionImages({commit}, {id}) {
            Get.getDetectionImages(id).then(value => {
                commit('setDetectionImages', value.data);
            });
        },
        async deleteImages({commit, state}) {
            for (let i in state.selectedImage) {
                await Post.deleteDetectionImage(state.selectedImage[i].id);
            }
            commit('deleteImages');
        }
    }

}