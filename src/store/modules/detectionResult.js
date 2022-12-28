import {Get} from "@/api/apiroutes";

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

            if (state.oneSelectImage != null) {
                state.selectedImage = state.selectedImage.filter(value1 => value1.id !== state.oneSelectImage.id)
            }

            state.oneSelectImage = value;
            if (!state.selectedImage.find(value1 => value1.id === value.id)) {
                state.selectedImage.push(value);
            }
            // const arr = state.selectedImage.find(value1 => value1.id === value.id);
            // console.log(arr);
            // state.selectedImage.push(value);
        },
        setSelectedImage(state, {img, status}) {
            if (status === true) {
                state.selectedImage.push(img);
            } else {
                state.selectedImage = state.selectedImage.filter(value => value.id !== img.id)
            }
        },
        deleteDetectionImage(state) {
            for (const i in state.selectedImage) {
                state.detectionImages = state.detectionImages.filter(value => value.id !== state.selectedImage[i].id)
            }
            state.selectedImage = [];
        }
    },
    actions: {
        getDetectionImages({commit}, {id}) {
            Get.getDetectionImages(id).then(value => {
                commit('setDetectionImages', value.data);
            });
        }
    }

}