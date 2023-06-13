<script setup>

let slides = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let slideCaptions = ['']

let icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']

let d = new Date();

function addTodo () {
        todos.value.push({
            text: newTodo.value
        })
}

let messages = [
        {
          from: '',
          message: 'loreum ipsum',
          time: '10:30am',
          color: '#FF9100',
        },
        {
          from: '',
          message: 'loreum ipsum',
          time: '12:00am',
          color: '#2979FF',
        },
        {
          from: '',
          message: 'loreum ipsum',
          time: '9:45pm',
          color: '#FF9100',
        },
      ]

async function test() {
  let result = await fetch("https://holidays.abstractapi.com/v1/?api_key=1655f53d1cdd40048392782e5a54db11&country=US&year=");

  console.log(result)
}
</script>



<template v-slot:extension>

  <v-card>

  <v-toolbar color="#1565C0">

    <v-icon icon="md:event"></v-icon>

    <v-toolbar-title class="bruh">Student Holiday Calendar</v-toolbar-title>

    <v-spacer></v-spacer>

  </v-toolbar>

  </v-card>

  <v-carousel width="200" height="400" hide-delimiters progress="blue-lighten-2" class="bruh2">

      <template v-slot:prev="{ props }">
        <v-btn variant="elevated" color="success" @click="props.onClick">Back</v-btn>
      </template>

      <template v-slot:next="{ props }">
        <v-btn variant="elevated" color="info" @click="props.onClick">Next</v-btn>
      </template>

      <v-carousel-item v-for="(slide, i) in slides" :key="i">

        <v-sheet height="100%">

          <div class="d-flex fill-height justify-center align-center">

            <div class="text-h2">
              {{slide}}
            </div>

          </div>

        </v-sheet>

      </v-carousel-item>

    </v-carousel>

    <!--Dayyyyyyuhhh-->

    <v-container>

        <v-row justify="space-around">

          <v-card width="4000">

            <v-img height="200" src="sun3.png" cover class="text-white">

              <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">

                <!--

                <template v-slot:prepend>

                  <v-btn icon="$menu"></v-btn>

                </template>

                -->

                <v-toolbar-title class="text-h6"> Today </v-toolbar-title>

                <!--

                <template v-slot:append>

                  <v-btn icon="mdi-dots-vertical"></v-btn> 

                </template>

                -->

              </v-toolbar>

            </v-img>

            <v-card-text>
              <div class="font-weight-bold ms-1 mb-2">Today</div>

              <v-timeline density="compact" align-center="start">

                <v-timeline-item
                  v-for="message in messages"
                  :key="message.time"
                  :dot-color="message.color"
                  size="x-small">

                  <div class="mb-4">

                    <div class="font-weight-normal">
                      <strong>{{ message.from }}</strong> {{ message.time }}
                    </div>

                    <div>{{ message.message }}</div>

                  </div>

                </v-timeline-item>

              </v-timeline>

            </v-card-text>

          </v-card>

        </v-row>

      </v-container>

  <router-view></router-view>

    <button to="/" @click="test()" class="j">Home</button>

    <body>

      <div class="wrapper">

      <header>

        <p class="current-date">June 2023</p>

        <div class="icons">
          <span id="prev" class="material-symbols-rounded"></span>
          <span id="next" class="material-symbols-rounded"></span>
        </div>

      </header>

        <div class="calendar">
          <ul class="weeks">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thur</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul class="days">
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>

          </ul>
        </div>

      </div>
    </body>
</template>



<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: center;
  min-height: 100vh;
  background: #FF9100;
}
.wrapper{
  width: 450px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.12);
}
.wrapper header{
  display: flex;
  align-items: center;
  padding: 25px 30px 10px;
  justify-content: space-between;
}
header .icons{
  display: flex;
}
header .icons span{
  height: 38px;
  width: 38px;
  margin: 0 1px;
  cursor: pointer;
  color: #878787;
  text-align: center;
  line-height: 38px;
  font-size: 1.9rem;
  user-select: none;
  border-radius: 50%;
}

.current-date {
  text-decoration: underline;
}

.icons span:last-child{
  margin-right: -10px;
}
header .icons span:hover{
  background: #f2f2f2;
}
header .current-date{
  font-size: 1.45rem;
  font-weight: 500;
}
.calendar{
  padding: 20px;
}
.calendar ul{
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  text-align: center;
}
.calendar .days{
  margin-bottom: 20px;
}
.calendar li{
  color: #333;
  width: calc(100% / 7);
  font-size: 1.07rem;
}
.calendar .weeks li{
  font-weight: 500;
  cursor: default;
}
.calendar .days li{
  z-index: 1;
  cursor: pointer;
  position: relative;
  margin-top: 30px;
}
.days li.inactive{
  color: #aaa;
}
.days li.active{
  color: #fff;
}
.days li::before{
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  height: 40px;
  width: 40px;
  z-index: -1;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.days li.active::before{
  background: #9B59B6;
}
.days li:not(.active):hover::before{
  background: #f2f2f2;
}
</style>