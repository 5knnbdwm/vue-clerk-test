<script setup>
import {
  useAuth,
  SignIn,
  // SignInButton,
  UserButton,
  // OrganizationSwitcher,
  // OrganizationList,
  // OrganizationProfile,
} from "vue-clerk";

const { isLoaded, isSignedIn, orgId } = useAuth();

import { ref } from "vue";

async function getUserInfo() {
  data.value = await useFetch("/api/user");
}

const data = ref(null);
// async function fetchDataFromExternalResource() {
//   const token = await getToken.value();
//   // Add logic to fetch your data
//   return data;
// }
</script>

<template>
  {{ orgId }}
  <div v-if="!isLoaded">Loading...</div>
  <div v-else-if="!isSignedIn">
    <SignIn />
  </div>
  <div v-else>
    <UserButton
      :appearance="{
        elements: {
          userButtonAvatarBox: 'size-6',
        },
      }"
      default-open
    />
    <button @click="getUserInfo">load</button>
    <pre>{{ data }}</pre>
  </div>
  <!-- <NuxtPage /> -->
</template>
