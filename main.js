'use strict';


class ExampleSlider {
   constructor({ wrapper, slider, time = 2000, }) {
      this.wrapper = document.querySelector(wrapper);
      this.slider = this.wrapper.querySelector(slider);
      this.width = this.slider.querySelector('ul').clientWidth;
      this.time = time;
   }

   hideAllSlide() {
      this.slider.querySelectorAll('li').forEach(v => v.style.display = 'none');
   }

   createStyle() {
      let style =
         `<style>
                  .furtherLeft{
                     animation-name : hide;
                     animation-duration:${this.time}ms;
                  }

                  .toleft{
                     animation-name : show;
                     animation-duration:${this.time}ms;
                  }

                  @keyframes hide {
                     0%{
                        right:0;
                        opaity:1;
                     }
                     25%{
                         opaity:0.2;
                     }
                     100%{
                        right:${this.width}px;
                        opacity:0;
                     }
                  }

                  @keyframes show {
                     0%{
                        right:-${this.width}px;
                        opacity:0;
                     }
                     50%{
                        opaity:0;
                     }
                     75%{
                        opaity:0.3;
                     }
                     100%{
                        right:0;
                        opaity:1;
                     }
                  }
         </style>`
      document.head.insertAdjacentHTML('beforeend', style);
   }

   showSlide(elem) {
      elem.style.display = 'block';
      elem.style.zIndex = '10';
      elem.classList.add('toleft');
      setTimeout(() => {
         elem.classList.remove('toleft');
         elem.classList.add('furtherLeft');
         elem.style.right = this.width + 'px';
      }, this.time);
   }

   slide() {

      let allSlides = this.slider.querySelectorAll('li');
      console.dir(allSlides[0]);
      for (let i = 0; i < allSlides.length; i++) {
         this.showSlide(allSlides[i]);

      }
   }




   init() {
      console.dir(this);
      this.hideAllSlide();
      this.createStyle();
      this.showSlide(this.slider.querySelector('li'));
      // this.slide();
   }
}



let data = {
   wrapper: '.wrapper',
   slider: '.slider',

};

const slider = new ExampleSlider(data);
slider.init();


