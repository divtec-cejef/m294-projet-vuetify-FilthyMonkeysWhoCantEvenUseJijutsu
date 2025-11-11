<template>
  <v-container v-if="game">
    <v-img
      class="mb-4"
      cover
      height="300px"
      :src="game.image?.medium_url"
    />
    <h1>{{ game.name }}</h1>
    <div class="mb-4" v-html="game.description || 'Aucune description disponible.'" />
    <v-btn
      class="mr-2 text-white"
      :color="store.favorites.some(f => f.id === game.id) ? 'red-darken-1' : 'primary'"
      @click="toggleFavorite(game)"
    >
      {{ store.favorites.some(f => f.id === game.id)
      ? 'Retirer des favoris'
      : 'Ajouter aux favoris' }}
    </v-btn>
    <v-btn color="secondary" @click="$router.push('/')">
      Retour au catalogue
    </v-btn>
  </v-container>

  <v-alert v-else class="mt-4" type="error">
    Jeu introuvable.
  </v-alert>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { useAppStore } from '@/stores/app'

  const route = useRoute()
  const store = useAppStore()
  const game = ref(null)

  onMounted(async () => {
    if (store.games.length === 0) {
      await store.init()
    }

    game.value = store.games.find(g => g.id === Number(route.params.id))

    if (!game.value) {
      console.warn('⚠️ Jeu introuvable même en local.')
    }
  })

  function toggleFavorite (game) {
    if (store.favorites.some(f => f.id === game.id))
      store.removeFavorite(game.id)
    else store.addFavorite(game)
  }
</script>
