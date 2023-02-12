console.log("vue ok", Vue);

const app = Vue.createApp({
  data() {
    return {
      movie: {
        title: "Marvel's Spiderman Miles Morale",
        title2: "Ratchet & Clank: Rift Apart",
        title3: "Fortnite",
        title4: "Stray",
        title5: "Marvel's Avengers",
        description:
          "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        description2:
          "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        description3:
          "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        description4:
          "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        description5:
          "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        images: [
          "./img/01.webp",
          "./img/02.webp",
          "./img/03.webp",
          "./img/04.webp",
          "./img/05.webp",
        ],

        activeImage: 0,
      },
    };
  },

  methods: {
    prevImage() {
      this.movie.activeImage--;
    },

    nextImage() {
      this.movie.activeImage++;
    },
  },

  created() {},

  mounted() {},
});

app.mount("#root");
