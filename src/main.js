// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button,NavBar,Tab, Tabs, Row, Col, Search,Swipe, SwipeItem ,Lazyload ,Field ,Toast} from 'vant'

Vue.use(Button).use(Row).use(Col).use(Tab).use(Tabs).use(NavBar).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Field).use(Toast)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
