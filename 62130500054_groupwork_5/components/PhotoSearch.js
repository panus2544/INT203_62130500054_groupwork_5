app.component("photo-search", {
    props: {
        form: Object,
    },
    template:
    /*html*/
        `
        <div>
            <span :class="{'hidden' : form.search }"><i class="fas fa-search" @click="search"></i></span>
            <span :class="{'hidden' : !form.search}">
                <input class="px-2 border-2 border-black mx-2 " placeholder="Please enter text for searching photos"
                    v-model="form.text">
                <button
                    class="bg-grey-lighter flex-1 border-b-2 md:flex-none border-grey ml-2 hover:bg-grey-lightest text-grey-darkest font-bold py-4 px-6 rounded"
                    @click="cancle">
                    Cancle
                </button>
            </span>
        </div>
    `,
    methods: {
        search() {
            this.form.search = !this.form.search;
        },
        cancle() {
            (this.form.search = !this.form.search), (this.form.text = "");
        },
    },
});