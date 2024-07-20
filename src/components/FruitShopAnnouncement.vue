<template>
    <v-row class="pa-8">
      <v-col cols="12" md="4" v-for="image in images" key="image">
        <v-card class="pa-2">
          <img class="h-100 w-100" :src="image" alt="nothing" />
        </v-card>
      </v-col>
      <v-col cols="5" class="text-center">
        <v-divider thickness="4"/>
      </v-col>
      <v-col cols="2" class="text-center"> 
      <v-card>
        Delivery within 24hr To 48hrs
      </v-card>  
      </v-col>
      <v-col cols="5" class="text-center">
        <v-divider thickness="4"/>
      </v-col>
    </v-row>
  </template>

<script setup lang="ts">
import refer from "../assets/images/off1.jpg";
import join from "../assets/images/off2.jpg";
import gifts from "../assets/images/off3.jpg";

const images = [refer, join, gifts];

</script>



<style scoped>

</style>