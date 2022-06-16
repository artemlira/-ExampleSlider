'use strict';


class ExampleSlider {
   constructor({ wrapper, slider, sliders, time = 1500, }) {
      this.wrapper = document.querySelector(wrapper);
      this.slider = this.wrapper.querySelector(slider);
      this.sliders = this.slider.querySelectorAll(sliders);
      this.width = this.slider.querySelector('ul').clientWidth;
      this.time = time;
      this.index = 0;
   }

   hideAllSlide() {
      this.sliders.forEach(v => {
         v.classList.add('hide');
         v.classList.remove('toright');
      });
   }

   createStyle() {
      let style =
         `<style>
                  .hide{
                     right:-${this.width}px;
                     opacity:0;
                  }

                  .toleft{
                     right: 0;
                     opacity:1;
                     transition-property: right, opacity;
                     transition-duration: ${this.time}ms;
                  }

                  .toright{
                     right:${this.width}px;
                     opacity:0;
                     transition-property: right, opacity;
                     transition-duration: ${this.time}ms, ${this.time / 3}ms;
                  }
         </style>`
      document.head.insertAdjacentHTML('beforeend', style);
   }

   showSlide(n) {
      this.sliders[n].classList.remove('hide');
      this.sliders[n].classList.add('toleft');
      setTimeout(() => {
         this.sliders[n].classList.add('toright');
         this.sliders[n].classList.remove('toleft');
         this.sliders[n].classList.add('hide');
      }, this.time);
   }

   slide() {
      if (this.index == this.sliders.length - 1) {
         this.index = 0;
         this.showSlide(this.index);
      } else {
         this.index++;
         this.showSlide(this.index);
      }
   }

   interval() {
      this.hideAllSlide();
      this.slide();
   }

   init() {
      console.dir(this);
      this.hideAllSlide();
      this.createStyle();
      setInterval(() => { this.interval() }, 2000);
   }
}



let data = {
   wrapper: '.wrapper',
   slider: '.slider',
   sliders: 'li',
};

const slider = new ExampleSlider(data);
slider.init();


