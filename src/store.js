import Vue from 'vue'
import Vuex from 'vuex'
import apiService from '@/api/generalService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    students: [],
    tasks: [],
    menuItems: []
  },
  mutations: {
    loadStudents(state, students) {
      state.students = students
    },
    loadTasks(state, tasks) {
      state.tasks = tasks
    },
    loadMenuItems(state, menuItems) {
      state.menuItems = menuItems
    },
  },
  actions: {
    async fetchStudents({commit}) {
      const studentsResponse = await apiService.getStudents()
      commit('loadStudents', studentsResponse.data)
    },
    async fetchTasks({commit}) {
      const tasksResponse = await apiService.getTasks()
      commit('loadTasks', tasksResponse.data)
    },
    async fetchMenuItems({commit}) {
      const menuItemsResponse = await apiService.getMenuItems()
      commit('loadMenuItems', menuItemsResponse.data)
    },
  }
})
