<template>
  <v-layout row>
    <v-flex xs12 sm12>
      <v-card>
        <v-toolbar color="light-blue" dark>
          <v-toolbar-title>My Classes</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list two-line subheader>
          <v-list-tile v-for="(item,index) in items" :key="index" avatar >
            
              <v-list-tile-avatar>
                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <router-link :to="item.link"><v-list-tile-title>{{ item.title }}</v-list-tile-title></router-link>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            
          </v-list-tile>
          
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  
  export default {
    name: 'ClsassesList',
    computed: {
      items() {
        return this.$store.state.menuItems
      }
    },
    beforeCreate: function() {
      this.$store.dispatch('fetchMenuItems')
    }
  }
  
</script>