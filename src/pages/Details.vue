<template>
  <v-container v-if="game">
    <v-img height="300px" :src="game.image?.medium_url"></v-img>
    <h1>{{ game.name }}</h1>
    <p v-html="game.description"></p>
    <v-btn @click="toggleFavorite(game)">
      {{ isFavorite(game.id) ? 'Retirer des favoris' : 'Ajouter aux favoris' }}
    </v-btn>
    <v-btn color="secondary" @click="$router.push('/')">Retour au catalogue</v-btn>
  </v-container>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { api } from '@/plugins/api'
  import { useAppStore } from '@/stores/app'

  const route = useRoute()
  const store = useAppStore()
  const game = ref(null)

  onMounted(async () => {
    const { data } = await api.get(`/game/${route.params.id}`)
    game.value = data.results
  })

  function toggleFavorite (game) {
    if (isFavorite(game.id)) store.removeFavorite(game.id)
    else store.addFavorite(game)
  }

  const isFavorite = id => store.favorites.some(g => g.id === id)
</script>
