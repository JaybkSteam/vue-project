<script setup>

let timeTab = [ {
        tab: null,
        items: ['Home', 'Week', 'Month'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}]

async function test() {
  let result = await fetch("https://holidays.abstractapi.com/v1/?api_key=1655f53d1cdd40048392782e5a54db11&country=US&year=2023&month=6&day=5");

  console.log(result)
}

</script>



<template v-slot:extension>

<v-card>

<v-toolbar color="#1A237E">

  <v-icon icon="md:event"></v-icon>

  <v-toolbar-title>Student Holiday Calendar</v-toolbar-title>

  <v-spacer></v-spacer>

    <v-tabs v-model="tab" align-tabs="title">

      <v-tab>
        <router-link to="/" class="timenav">Home</router-link>
      </v-tab>

      <v-tab>
        <router-link to="/Day" class="timenav">Day</router-link>
      </v-tab>

      <v-tab>
        <router-link to="/Week" class="timenav">Week</router-link>
      </v-tab>

    </v-tabs>

</v-toolbar>

<v-window v-model="tab">

  <v-window-item v-for="item in items" :key="item" :value="item">

    <v-card flat>

      <v-card-text v-text="text"></v-card-text>

    </v-card>

  </v-window-item>

</v-window>

</v-card>

<!--

  <div class="text-center">
    <div>
      <v-btn class="ma-2" color="primary">
        Accept
      </v-btn>

      <v-btn class="ma-2" color="red">
        Decline
      </v-btn>

      <v-btn class="ma-2">
        Cancel
      </v-btn>
    </div>

    <div>
      <v-btn class="ma-2" color="orange-darken-2">
        Back
      </v-btn>
    </div>

    <div>
      <v-btn
        class="ma-2"
        variant="text"
        icon="mdi-thumb-up"
        color="blue-lighten-2"
      ></v-btn>

      <v-btn
        class="ma-2"
        variant="text"
        icon="mdi-thumb-down"
        color="red-lighten-2"
      ></v-btn>
    </div>
  </div>

-->
<img src="/public/logo.png" alt="">
<router-view></router-view>

  <h1>June 5 2023</h1>

  <button to="/" @click="test" class="j">Home</button>

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
    color: rgb(255, 255, 255);
    text-decoration: none;
  }

  .timenav:active {
    text-decoration: none;
  }

</style>