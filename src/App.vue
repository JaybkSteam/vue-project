<script setup>

let timeTab = [ {
        tab: null,
        items: ['Day', 'Week', 'Month', 'Year'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}]

async function fetchData() {
  let result = await fetch("https://holidays.abstractapi.com/v1/?api_key=1655f53d1cdd40048392782e5a54db11&country=US&year=2023&month=6&day=5")
  console.log(result)
}

</script>



<template>

<v-card>

<v-toolbar color="blue">

  <v-app-bar-nav-icon></v-app-bar-nav-icon>

  <v-toolbar-title>date</v-toolbar-title>

  <v-spacer></v-spacer>

  <template v-slot:extension>

    <v-tabs v-model="tab" align-tabs="title">

      <v-tabs>
        <router-link to="/" class="timenav">Home</router-link>
      </v-tabs>

      <v-tabs>
        <router-link to="/Day" class="timenav">Day</router-link>
      </v-tabs>

      <v-tabs>
        <router-link to="/Week" class="timenav">Week</router-link>
      </v-tabs>

    </v-tabs>

  </template>

</v-toolbar>

<v-window v-model="tab">

  <v-window-item v-for="item in items" :key="item" :value="item">

    <v-card flat>

      <v-card-text v-text="text"></v-card-text>

    </v-card>

  </v-window-item>

</v-window>

</v-card>


<button @click="test"></button>


<router-view></router-view>

  <h1>June 1st 2023</h1>

  <router-link to="/" class="timenav">Home</router-link>
  <router-link to="/Week" class="timenav">Week</router-link>
  <router-link to="/Day" class="timenav">Day</router-link>

    <div class="wrapper">

        <p class="current-date">June 2023</p>

      <div class="calendar">
        <ul class="weeks">
          <li>Sunday</li>
          <li>Monday</li>
          <li>Tuesday</li>
          <li>Wednesday</li>
          <li>Thursday</li>
          <li>Friday</li>
          <li>Saturday</li>
        </ul>
      </div>

    </div>

</template>



<style scoped>

@import url("https://cdn.jsdelivr.net/npm/vuetify@3.3.2/dist/vuetify-labs.css");

  .timenav {
    position: relative;
    padding: 0px 10px 0px 10px;
  }

</style>