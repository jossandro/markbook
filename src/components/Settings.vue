<template>
  <v-container>
    <v-layout row wrap >
      <v-flex md12 pa-1><h3>Settings</h3></v-flex>
      <v-flex md12 xs12 pa-1 >
        <v-switch :label="`Classwork `" v-model="classworkSwitch"></v-switch>
      </v-flex>
      <v-flex md12 xs12 pa-1 >
        <v-switch :label="`Coursework`" v-model="courseworkSwitch"></v-switch>
      </v-flex>
      <v-flex md12 xs12 pa-1 >
        <v-switch :label="`Show Rankings`" v-model="rankingsSwitch"></v-switch>
      </v-flex>
      <v-flex md12 xs12 pa-2 >
        <label>Show marks as: </label>
      </v-flex>
      <v-flex md12 xs12 pa-1 >
        <v-radio-group v-model="radioGroupMarks">
          <v-radio :label="`Scores`" :key="`scores_radio`" :value="`scores`"></v-radio>
          <v-radio :label="`Percentages`" :key="`percentages_radio`" :value="`percentages`"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex md12 xs12 pa-2 >
        <label>Identify students by: </label>
      </v-flex>
      <v-flex md12 xs12 pa-1 >
        <v-radio-group v-model="radioGroupStudents">
          <v-radio :label="`Name`" :key="`name_radio`" :value="`name`"></v-radio>
          <v-radio :label="`BOS Number`" :key="`bos_number_radio`" :value="`bos_number`"></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Settings',
    data () {
      return {
        radioGroupMarks: 1,
        radioGroupStudents: 1,
        classworkSwitch: true,
        courseworkSwitch: true,
        rankingsSwitch: false,
      }
    }
  }
</script>