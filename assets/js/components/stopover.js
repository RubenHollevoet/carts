Vue.component('stopover-item', {
    props: [
        'img'
    ],
    template: `<li>stop1 <img v-bind:src="img" alt="stop-image" width="200" height="200">
  <span class="btn red press-me"><span class="fa fa-trash"></span></span>
  <span class="btn red press-me"><span class="fa fa-qrcode"></span></span>
  </li>`,
    computed: {
    }
});
