<template>
  <v-container>
    <v-text-field v-model="search" clearable label="Rechercher un jeu" />
    <v-row>
      <v-col v-for="game in filteredGames" :key="game.id" cols="12" md="4">
        <v-card @click="$router.push(`/details/${game.id}`)">
          <v-img height="200px" :src="game.image?.medium_url" />
          <v-card-title>{{ game.name }}</v-card-title>
          <v-card-actions>
            <v-btn @click.stop="toggleFavorite(game)">
              {{ isFavorite(game.id) ? 'Retirer des favoris' : 'Ajouter aux favoris' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue'
  import { api } from '@/plugins/api'
  import { useAppStore } from '@/stores/app'

  const store = useAppStore()
  const games = ref([])
  const search = ref('')

  onMounted(async () => {
    const { data } = await api.get('/games', { params: { field_list: 'id,name,image' } })
    games.value = data.results
  })

  const filteredGames = computed(() =>
    games.value.filter(g =>
      g.name.toLowerCase().includes(search.value.toLowerCase()),
    ),
  )

  function toggleFavorite (game) {
    if (isFavorite(game.id)) store.removeFavorite(game.id)
    else store.addFavorite(game)
  }

  const isFavorite = id => store.favorites.some(g => g.id === id)
</script>
