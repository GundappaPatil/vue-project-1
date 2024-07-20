<script setup lang="ts">
import FruitShopFooter from "./FruitShopFooter.vue";
import FruitShopAnnouncement from "../components/FruitShopAnnouncement.vue";
import FruitShopNavbar from "./FruitShopNavbar.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // Import the auth module
import { useRouter } from "vue-router"; // import router
import { onBeforeUnmount,ref } from 'vue'

const isLoggedIn = ref(false)
const router = useRouter(); // get a reference to our vue router
const authListener = firebase.auth().onAuthStateChanged(function(user) {
      if (user) { // not logged in
        isLoggedIn.value = true;
      }else{
        isLoggedIn.value = false;
        // alert('you must be logged in to view this. redirecting to the home page')
        router.push('/')
      }
  })
  onBeforeUnmount(() => {
      // clear up listener
      authListener()
  })
</script>

<template>
  <div v-if="isLoggedIn">
  <FruitShopNavbar />
  <VApp class="d-flex flex-column">
    <v-container fluid>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <FruitShopAnnouncement />
          </v-card>
        </v-col>
        <v-col v-for="n in 4" :key="n" cols="12">
          <v-card
            :subtitle="`Subtitle for Content ${n}`"
            :title="`Content ${n}`"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
          ></v-card>
        </v-col>
      </v-row>
    </v-container>
    <FruitShopFooter />
  </VApp>
</div>
</template>
