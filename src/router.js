import Vue from 'vue'
import Router from 'vue-router'
import MarkGrid from './components/MarkGrid'
import MainGrid from './components/MainGrid'


Vue.use(Router)

export default new Router({
  routes : [
    { 
      path: '/maingrid', 
      name: 'mainGrid',
      component: MainGrid 
    },
    { 
      path: '/markgrid', 
      name: 'markGrid',
      component: MarkGrid 
    }
  ]
})
