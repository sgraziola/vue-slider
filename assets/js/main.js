import slides from "./script.js"
console.log(slides);


/* Descrizione:
Partendo dal markup della versione svolta in js plain (vedi allegato), rifare lo slider ma questa volta usando Vue.
Bonus:
al click su una thumb, visualizzare in grande l'immagine corrispondente
applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce */

const { createApp } = Vue 
createApp ({
    data (){
        return {
            activeImage : 0,
            intervalId : "",
            hover : "false",
            carousel : slides,
        }
    },

    methods: {
        prevImg(){
            this.activeImage--;
            //console.log(this.activeImage);
            //console.log(this.carousel.length);
            //console.log(this);
            if (this.activeImage < 0) {
                this.activeImage = this.carousel.length - 1;
            }
        },
        nextImg(){
            this.activeImage++;
            //console.log(this.activeImage);
            if (this.activeImage === this.carousel.length) {
                this.activeImage = 0;
            }
        },

        autoPlayOn(){
            this.hover = true;
            this.intervalId = setInterval(() => {
                this.nextImg();
            }, 1000);
        },

        autoPlayOff(){
            clearInterval(this.intervalId)
        },

        activeThumb(index){
            this.activeImage = index;
        }

    },

}).mount("#app");