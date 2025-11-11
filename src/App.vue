<template>
  <v-app class="app-background">
    <!-- Barre d'application -->
    <v-app-bar color="primary" elevate-on-scroll>
      <v-container class="d-flex align-center">
        <!-- Rendre le bloc titre/logo cliquable -->
        <v-toolbar-title class="p-0 m-0">
          <RouterLink class="d-flex align-center text-decoration-none" to="/">
            <v-img class="mr-2" max-width="40" :src="logo" />
            <span class="text-white font-weight-bold text-h6">Vapor</span>
          </RouterLink>
        </v-toolbar-title>

        <v-spacer />

        <!-- Boutons de navigation -->
        <v-btn class="text-white" text to="/">Accueil</v-btn>
        <v-btn class="text-white" text to="/wishlist">Favoris</v-btn>
        <v-btn class="text-white" text to="/about">À propos</v-btn>
      </v-container>
    </v-app-bar>

    <!-- Contenu principal de l'application -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Footer inspiré de Steam -->
    <AppFooter />
  </v-app>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { RouterLink } from 'vue-router'
  import logo from '@/assets/Vapor-logo.png'
  import AppFooter from '@/components/AppFooter.vue' // Import du footer
  import { useAppStore } from '@/stores/app.js'

  const store = useAppStore()

  // Initialisation du store au montage du composant
  onMounted(() => store.init())
</script>

<style scoped>
/* Fond général de l'application */
.app-background {
  background:
    linear-gradient(rgba(10, 10, 15, 0.85), rgba(10, 10, 15, 0.95)),
    url('@/assets/Vapor-logo.png') center center / contain no-repeat fixed;
  background-color: #0a0a0f; /* couleur de secours si l'image ne se charge pas */
  min-height: 100vh;
  color: white;
}

/* Assombrir toutes les cartes Vuetify */
.v-card {
  background-color: rgba(30, 30, 40, 0.8) !important;
  color: white !important;
  border-radius: 12px;
  backdrop-filter: blur(6px);
}

/* Style des liens dans la barre d'outils */
a {
  text-decoration: none;
}

.v-toolbar-title a:hover {
  opacity: 0.8;
  transition: opacity 0.2s;
}
</style>
