<script setup>
  import { computed, onMounted, ref } from 'vue'
  import GameCard from '@/components/GameCard.vue'
  import GameFilters from '@/components/GameFilters.vue'
  import { useAppStore } from '@/stores/app'

  const store = useAppStore()

  const filters = ref({
    genre: 'Tous',
    platform: 'Toutes',
    year: 'Toutes',
    search: '',
  })

  const sortOrder = ref('asc')

  onMounted(async () => {
    if (store.games.length === 0) await store.init()
  })

  const availableGenres = computed(() => {
    const genres = new Set()
    for (const g of store.games) {
      if (g.genres) for (const gn of g.genres) genres.add(gn.name)
    }
    return Array.from(genres)
  })

  const availablePlatforms = computed(() => {
    const platforms = new Set()
    for (const g of store.games) {
      if (g.platforms) for (const p of g.platforms) platforms.add(p.abbreviation)
    }
    return Array.from(platforms)
  })

  const availableYears = computed(() => {
    const years = new Set()
    for (const g of store.games) {
      const y = g.expected_release_year || new Date(g.original_release_date).getFullYear()
      if (y) years.add(y)
    }
    return Array.from(years).toSorted((a, b) => b - a)
  })

  const filteredAndSortedGames = computed(() => {
    const { genre, platform, year, search } = filters.value
    return store.games
      .filter(g => {
        const matchesSearch = g.name.toLowerCase().includes(search.toLowerCase())
        const matchesGenre = genre === 'Tous' || g.genres?.some(gn => gn.name === genre)
        const matchesPlatform = platform === 'Toutes' || g.platforms?.some(p => p.abbreviation === platform)
        const releaseYear = g.expected_release_year || new Date(g.original_release_date).getFullYear()
        const matchesYear = year === 'Toutes' || releaseYear === year
        return matchesSearch && matchesGenre && matchesPlatform && matchesYear
      })
      .toSorted((a, b) =>
        sortOrder.value === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name),
      )
  })

  function toggleSortOrder () {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  }
</script>

<template>
  <v-container>
    <GameFilters
      :filters="filters"
      :genres="availableGenres"
      :platforms="availablePlatforms"
      :sort-order="sortOrder"
      :years="availableYears"
      @toggle-sort="toggleSortOrder"
    />

    <v-row>
      <v-col v-for="game in filteredAndSortedGames" :key="game.id" cols="12" md="4">
        <GameCard :game="game" />
      </v-col>
    </v-row>

    <v-alert v-if="filteredAndSortedGames.length === 0" class="mt-8" type="info">
      Aucun jeu ne correspond à vos filtres.
    </v-alert>
  </v-container>
</template>
