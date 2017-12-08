import Vue from 'vue'
import Widget2 from './Widget2.vue'

export function boot(element) {
  new Vue({
    el: element,
    render: h => h(Widget2)
  });
}
