<template>
  <v-app-bar height="50" color="light-green-darken-2">
    <v-row class="text-center align-center">
      <v-col cols="6">
        <span class="mo-4 text-bold"> Tracking </span>
        <span>Membership</span>
      </v-col>
      <v-col cols="6">
        <RouterLink to="/">
          <span>
            <v-icon start icon="fa-solid fa-house"></v-icon>
            Home</span
          >
        </RouterLink>
        <RouterLink to="/about">
          <span>
            <v-btn variant="text" icon="fa-solid fa-earth-americas" />
            About us
          </span>
        </RouterLink>
        <span>
          <v-btn icon="fa-solid fa-briefcase" />
          My Account
        </span>
        <span>
          <v-btn icon="fa-solid fa-heart" />
          Wishlist
        </span>
      </v-col>
    </v-row>
  </v-app-bar>
  <v-app-bar height="100" image="https://picsum.photos/1920/1080?random">
    <v-row class="text-center align-center">
      <v-col cols="6">
        <RouterLink to="/calculator">
        <span>Calculator</span>
      </RouterLink>
        <span class="mo-4 text-bold"> Title </span>
      </v-col>
      <v-col cols="6">
        <RouterLink to="/login">
          <span>
            <v-icon start icon="fa-solid fa-user"></v-icon>
            Login</span
          >
        </RouterLink>
        <span>
          <v-btn variant="text" icon="fa-solid fa-user" @click="signOut()" />
          Logout
        </span>
        <RouterLink to="/register">
          <span>
            <v-btn variant="text" icon="fa-solid fa-user" />
            Register
          </span>
        </RouterLink>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue"; // used for conditional rendering
import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // Import the auth module
import { useRouter } from "vue-router";
const router = useRouter();
const isLoggedIn = ref(true);
// runs after firebase is initialized
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true; // if we have a user
  } else {
    isLoggedIn.value = false; // if we do not
  }
});
const signOut = () => {
  firebase.auth().signOut();
  router.push("/");
};
</script>
