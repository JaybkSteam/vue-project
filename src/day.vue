<script setup>

let messages = [
        {
          from: '',
          message: 'loreum ipsum',
          time: '10:30am',
          color: 'deep-purple-lighten-1',
        },
        {
          from: '',
          message: 'loreum ipsum',
          time: '12:00am',
          color: 'green',
        },
        {
          from: '',
          message: 'loreum ipsum',
          time: '9:45pm',
          color: 'deep-purple-lighten-1',
        },
      ]

</script>



<template>

<h1>Day</h1>

<v-container>

    <v-row justify="space-around">

      <v-card width="4000">

        <v-img height="500" src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJldHR5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" cover class="text-white">

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

          <v-timeline density="compact" align-tabs ="start">

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