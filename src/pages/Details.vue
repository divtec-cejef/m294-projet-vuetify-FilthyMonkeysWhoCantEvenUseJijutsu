<template>
  <v-container v-if="game">
    <!-- Image principale du jeu -->
    <v-img
      class="mb-4"
      cover
      height="300px"
      :src="game.image?.medium_url"
    />

    <!-- Titre du jeu -->
    <h1>{{ game.name }}</h1>

    <!-- Description du jeu (ou message par défaut si absente) -->
    <div class="mb-4" v-html="game.description || 'Aucune description disponible.'" />

    <!-- Bouton ajouter/retirer des favoris -->
    <v-btn
      class="mr-2 text-white"
      :color="store.favorites.some(f => f.id === game.id) ? 'red-darken-1' : 'primary'"
      @click="toggleFavorite(game)"
    >
      {{ store.favorites.some(f => f.id === game.id)
        ? 'Retirer des favoris'
        : 'Ajouter aux favoris' }}
    </v-btn>

    <!-- Bouton retour au catalogue -->
    <v-btn color="secondary" @click="$router.push('/')">
      Retour au catalogue
    </v-btn>
  </v-container>

  <!-- Message d'erreur si le jeu n'est pas trouvé -->
  <v-alert v-else class="mt-4" type="error">
    Jeu introuvable.
  </v-alert>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { useAppStore } from '@/stores/app'

  // Accès au store et à la route
  const route = useRoute()
  const store = useAppStore()
  const game = ref(null)

  // Charger le jeu au montage
  onMounted(async () => {
    if (store.games.length === 0) {
      await store.init() // Initialisation si la liste de jeux est vide
    }

    // Trouver le jeu correspondant à l'ID de l'URL
    game.value = store.games.find(g => g.id === Number(route.params.id))

    if (!game.value) {
      console.warn('Jeu introuvable même en local.')
    }
  })

  // Ajouter ou retirer le jeu des favoris
  function toggleFavorite (game) {
    if (store.favorites.some(f => f.id === game.id))
      store.removeFavorite(game.id)
    else
      store.addFavorite(game)
  }
</script>
