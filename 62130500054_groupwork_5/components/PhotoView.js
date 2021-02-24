app.component("photo-view", {
    props: {
        modal: Object,
    },
    template:
    /*html*/
        `
        <div v-if="modal.modalState" class="flex items-center animated fadeIn fixed z-50  overflow-auto bg-smoke-dark inset-0">
            <div class="animated fadeInUp fixed shadow-inner max-w-md md:relative pin-b pin-x align-top m-auto justify-end  p-8 bg-white  w-full  flex flex-col">
                <img class="my-auto " :src="modal.imageModal" alt="">
                <div class="inline-flex justify-center">
                    <button @click="handleModal" class="bg-grey-lighter flex-1 border-b-2 md:flex-none border-green ml-2 hover:bg-green-lightest text-grey-darkest font-bold py-4 px-6 rounded">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `,
    methods: {
        handleModal() {
            this.$emit("when-closemodal");
        },
    },
});