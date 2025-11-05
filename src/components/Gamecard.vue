<template>
  <v-card
    class="game-card"
    @click="handleClick"
  >
    <v-img
      cover
      height="200px"
      :src="game.image?.medium_url"
    />

    <v-card-title>{{ game.name }}</v-card-title>
    <v-card-subtitle>
      {{
        game.expected_release_year
          || new Date(game.original_release_date).getFullYear()
          || 'Année inconnue'
      }}
      {{ game.platforms?.map(p => p.abbreviation).join(', ') || 'N/A' }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        class="text-white"
        :color="isFavorite ? 'red-darken-1' : 'primary'"
        variant="elevated"
        @click.stop="toggleFavorite"
      >
        {{ isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAppStore } from '@/stores/app'

  const props = defineProps({
    game: { type: Object, required: true },
  })

  const store = useAppStore()
  const router = useRouter()

  // ✅ Computed state
  const isFavorite = computed(() =>
    store.favorites.some(f => f.id === props.game.id),
  )

  function toggleFavorite () {
    if (isFavorite.value) store.removeFavorite(props.game.id)
    else store.addFavorite(props.game)
  }

  function handleClick () {
    router.push(`/details/${props.game.id}`)
  }
</script>

<style scoped>
.game-card {
  background-color: rgba(30, 30, 40, 0.9);
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.game-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}
</style>
