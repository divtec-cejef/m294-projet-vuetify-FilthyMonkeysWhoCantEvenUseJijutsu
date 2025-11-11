<template>
  <v-app class="app-background">
    <!-- App Bar -->
    <v-app-bar color="primary" elevate-on-scroll>
      <v-container class="d-flex align-center">
        <!-- 🔗 Make the entire title block (logo + text) clickable -->
        <v-toolbar-title class="p-0 m-0">
          <RouterLink class="d-flex align-center text-decoration-none" to="/">
            <v-img class="mr-2" max-width="40" :src="logo" />
            <span class="text-white font-weight-bold text-h6">Vapor</span>
          </RouterLink>
        </v-toolbar-title>

        <v-spacer />

        <v-btn class="text-white" text to="/">Accueil</v-btn>
        <v-btn class="text-white" text to="/wishlist">Favoris</v-btn>
        <v-btn class="text-white" text to="/about">À propos</v-btn>
      </v-container>
    </v-app-bar>

    <!-- Main content -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Steam-style Footer -->
    <AppFooter />
  </v-app>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { RouterLink } from 'vue-router'
  import logo from '@/assets/Vapor-logo.png'
  import AppFooter from '@/components/AppFooter.vue' // <-- import the footer
  import { useAppStore } from '@/stores/app.js'

  const store = useAppStore()
  onMounted(() => store.init())
</script>

<style scoped>
.app-background {
  background:
    linear-gradient(rgba(10, 10, 15, 0.85), rgba(10, 10, 15, 0.95)),
    url('@/assets/Vapor-logo.png') center center / contain no-repeat fixed;
  background-color: #0a0a0f; /* fallback in case image fails to load */
  min-height: 100vh;
  color: white;
}

/* 🎨 Darken all Vuetify cards */
.v-card {
  background-color: rgba(30, 30, 40, 0.8) !important;
  color: white !important;
  border-radius: 12px;
  backdrop-filter: blur(6px);
}

/* Toolbar link styling */
a {
  text-decoration: none;
}

.v-toolbar-title a:hover {
  opacity: 0.8;
  transition: opacity 0.2s;
}
</style>
