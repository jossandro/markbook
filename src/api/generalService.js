import Api from '@/api/api'

export default {
    getStudents () {
      return Api().get('/students')
    },

    getTasks () {
      return Api().get('/tasks')
    },

    getMenuItems () {
      return Api().get('/menuItems')
    }
}