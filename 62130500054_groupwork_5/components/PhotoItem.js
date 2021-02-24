app.component("photo-item", {
    props: {
        image: Object,
    },
    template:
    /*html*/
        `
   <div class="mt-10 bg-white shadow-lg rounded w-1/3 mx-auto">
               <img @click.native="handleLike(image.no)" class="rounded-t-lg " :src="image.images" alt="Vilage">
               <div class="p-6">
                   <h2 class="my-2 text-2xl font-bold text-purple-700"> {{image.title}}</h2>
                    <p class="mb-2 text-purple-600"> {{image.author_name}}</p>
                   <p class="mb-2 "> <i v-show="image.heart" class="fas fas-2xl fa-heart text-red-500"></i></p>
              </div>
  </div>
  `,
    methods: {
        handleLike(no) {
            this.$emit("when-like", no);
        },
    },
});