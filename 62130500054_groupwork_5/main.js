const app = Vue.createApp({
    data() {
        return {
            galleries: [{
                    no: 1,
                    title: "Car",
                    images: "https://images.unsplash.com/photo-1612882835995-1b3af9a52d5b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1",
                    author_name: "Simon Lohmann",
                    heart: false,
                },
                {
                    no: 2,
                    title: "Women",
                    images: "https://images.unsplash.com/photo-1612830079777-54121ec93c40?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1",
                    author_name: "Harry Peters",
                    heart: false,
                },
                {
                    no: 3,
                    title: "XPS",
                    images: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1",
                    author_name: "Designed to be the best",
                    heart: false,
                },
                {
                    no: 4,
                    title: "Women Buetiful",
                    images: "https://images.unsplash.com/photo-1612834484807-31997b8d4441?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1",
                    author_name: "Liz Fitch",
                    heart: false,
                },
            ],
            form: {
                text: "",
                search: false,
            },
            modal: {
                modalState: false,
                imageModal: "",
            },
        };
    },

    methods: {
        like(no) {
            for (let index = 0; index <= this.galleries.length; index++) {
                const element = this.galleries[index];
                if (element.no == no) {
                    this.modal.imageModal = element.images;
                    element.heart = !element.heart;
                    if (element.heart) {
                        this.modal.modalState = !this.modal.modalState;
                    }
                    break;
                }
            }
        },

        toggleModal() {
            this.modal.modalState = !this.modal.modalState;
        },
    },
    computed: {
        countLike() {
            return this.galleries.filter((i) => i.heart).length;
        },
        searching() {
            return this.galleries.filter((member) => {
                return member.title
                    .toLowerCase()
                    .includes(this.form.text.toLowerCase());
            });
        },
    },
});