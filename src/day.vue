<script setup>

let messages = [
        {
          from: '',
          message: 'wake up and get dressed and eat breakfeast ',
          time: '10:30am',
          color: '#FF9100',
        },
        {
          from: '',
          message: 'Leave for school',
          time: '12:00am',
          color: '#2979FF',
        },
        {
          from: '',
          message: 'go to bed',
          time: '9:45pm',
          color: '#FF9100',
        },
      ]

</script>



<template>

<h1>Day</h1>

<v-container>

    <v-row justify="space-around">

      <v-card width="4000">

        <v-img height="200" src="https://images.pexels.com/photos/2893556/pexels-photo-2893556.jpeg?cs=srgb&dl=pexels-nicole-avagliano-2893556.jpg&fm=jpg" cover class="text-white">

          <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">

            <!--

            <template v-slot:prepend>

              <v-btn icon="$menu"></v-btn>

            </template>

            -->

            <v-toolbar-title class="text-h6"> dayOfWeek </v-toolbar-title>

            <!--

            <template v-slot:append>

               <v-btn icon="mdi-dots-vertical"></v-btn> 

            </template>

            -->

          </v-toolbar>

        </v-img>

        <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">Today</div>

          <v-timeline density="compact" align="start">

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

</template>



<style scoped>

</style>