<template>
  <VCard>
    <VRow no-gutters style="height: 100vh" class="auth-wrapper">
      <VCol lg="8" class="d-none d-lg-flex">
        <div
          class="position-relative bg-grey-lighten-3 auth-bg rounded-lg w-100 h-90 ma-8 me-0"
        >
          <div class="d-flex align-center justify-center w-100 h-100">
            <img :src="logo" class="auth-illustration w-50" />
          </div>
        </div>
      </VCol>
      <VCol cols="12" lg="4" class="d-flex align-center justify-center">
        <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
          <VCardText>
            <span>
              <img :src="logo" alt="nothing" class="w-25" />
              <h2>Welcome to FruitShop!</h2>
              <p>
               Create your account here
              </p>
            </span>
          </VCardText>
          <VCardText>
            <v-form @submit.prevent="register">
              <VRow>
                <VCol cols="12">
                  <VTextField
                    v-model="email"
                    type="email"
                    label="Email"
                  ></VTextField>
                </VCol>
                <VCol cols="12">
                  <VTextField
                    type="password"
                    label="Password"
                    v-model="password"
                  ></VTextField>
                  <!-- <div
                    class="d-flex flex-row-reverse align-center flex-wrap justify-space-between mt-0 mb-4"
                  >
                    <RouterLink class="text-primary mt-0 mb-1" to="/register">
                      Forgot Password?
                    </RouterLink>
                  </div> -->

                  <v-btn class="me-4 w-100 bg-blue" type="submit">
                    Sign Up
                  </v-btn>
                  <div class="text-subtitle-1 text-center mt-4 mb-4">
                    <p>
                     Already have an account?
                      <RouterLink class="text-primary mt-0 mb-1" to="/">
                        Sign In Instead
                      </RouterLink>
                    </p>
                  </div>
                </VCol>
              </VRow>
            </v-form>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VCard>
</template>

<script setup lang="ts">
import { ref } from "vue";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Import the auth module
import logo from "../assets/logo.svg";
import { useRouter } from "vue-router"; // import router
const email = ref("");
const password = ref("");
const router = useRouter(); // get a reference to our vue router
const register = () => {
    console.log(email.value,password.value)
  firebase
    .auth() // get the auth api
    .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
    .then((data) => {
      console.log("Successfully registered!");
      router.push("/"); // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>

<style scoped>
.auth-wrapper {
  background-color: rgb(var(--v-theme-surface));
  min-block-size: calc(var(--vh, 1vh) * 100);
}
</style>

