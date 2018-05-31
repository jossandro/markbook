<template>
  <v-data-table
    :headers="generatedHeaders"
    :items="students"
    hide-actions
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.firstName }}</td>
      <td v-for="task in props.item.taskMarks" 
          :key="task.taskId"
          class="text-xs-right">
        <v-edit-dialog
          :return-value.sync="task.mark"
          lazy
        > {{ formatMark(task.mark) }}
        <!-- :value="task.mark"
            @input="updateMark"   -->
          <v-text-field
            slot="input"
            v-model="task.mark"
            label="Edit"
            single-line
            counter
          ></v-text-field>
        </v-edit-dialog>
      </td>
      
    </template>

    <template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        Sorry, there are no tasks here :(
      </v-alert>
    </template>
  
  </v-data-table>
</template>


<script>
  export default {
    name: 'MainGrid',
    data () {
      return {
        // change to computed to retur serverdata
      }
    },
    methods: {
      formatMark: function(n) {
        return n.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2});
      }
      // ,
      // updateMark: function(whatisit, andIt) {
      //   alert(whatisit + ' - ' + andIt)
      // }
    },
    computed: {
      
      students() {
        return this.$store.state.students
      },

      tasks() {
        return this.$store.state.tasks
      },

      generatedHeaders() {
        let headers = new Array();
        headers[0] = {
          text: 'Students',
          align: 'left',
          sortable: true,
          value: 'name'
        }
        for(let x=0; x < this.$store.state.tasks.length; x++){
          headers[x+1] = {
            text : this.$store.state.tasks[x].task,
            value : this.$store.state.tasks[x].taskId
          }
        }

        return headers;
      }
    },
    beforeCreate: function() {
      this.$store.dispatch('fetchStudents')
      this.$store.dispatch('fetchTasks')
    }
  }
</script>