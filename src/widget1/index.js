import Vue from 'vue'
import Widget1 from './Widget1.vue'

export function boot(element) {
  new Vue({
    el: element,
    render: h => h(Widget1)
  });
}
