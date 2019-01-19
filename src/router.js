import Vue from 'vue'
import Router from 'vue-router'
import Player from './views/Player.vue'

Vue.use(Router)
//import Gallery from './views/Gallery.vue';
export default new Router({
  routes: [
    {
      path:'/player/:id',
      component: Player
    }
  ]
})
