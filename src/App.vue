<template>
  <v-app id="inspire">
    
    <v-toolbar
      color="blue-grey"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>New Markbook by Joey</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Print</v-btn>
        <v-btn flat>Export</v-btn>
        <v-btn flat>Custom Spread</v-btn>
        <v-btn flat>Graph</v-btn>
        <v-btn flat>Duplicate Task</v-btn>
        <v-btn flat>Delete</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click.stop="left = !left">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <ClassesList></ClassesList>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="left"
      temporary
      fixed
    >
      <Settings></Settings>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height>
        <v-layout >
          <v-flex>
            <!-- <MarkGrid></MarkGrid>  -->
            <router-view></router-view>
            <!-- <MainGrid></MainGrid>  -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="blue-grey" class="white--text" app>
      <span>Vuetify</span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>


<script>

import ClassesList from './components/ClassesList'
import Settings from './components/Settings'

export default {
  name: 'App',
  components: {
    ClassesList,
    Settings
  },
  data: () => ({
    drawer: true,
    drawerRight: true,
    right: null,
    left: null
  })
}
</script>
