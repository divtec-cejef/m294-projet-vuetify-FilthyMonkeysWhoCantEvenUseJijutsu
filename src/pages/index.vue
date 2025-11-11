<script setup>
  import { computed, onMounted, ref } from 'vue'
  import GameCard from '@/components/GameCard.vue'
  import GameFilters from '@/components/GameFilters.vue'
  import { useAppStore } from '@/stores/app'

  // Accès au store global
  const store = useAppStore()

  // Valeurs des filtres réactives
  const filters = ref({
    genre: 'Tous',
    platform: 'Toutes',
    year: 'Toutes',
    search: '',
  })

  // Ordre de tri (ascendant/descendant)
  const sortOrder = ref('asc')

  // Charger les jeux au montage si le store est vide
  onMounted(async () => {
    if (store.games.length === 0) await store.init()
  })

  // Liste des genres disponibles pour le filtre
  const availableGenres = computed(() => {
    const genres = new Set()
    for (const g of store.games) {
      if (g.genres) for (const gn of g.genres) genres.add(gn.name)
    }
    return Array.from(genres)
  })

  // Liste des plateformes disponibles pour le filtre
  const availablePlatforms = computed(() => {
    const platforms = new Set()
    for (const g of store.games) {
      if (g.platforms) for (const p of g.platforms) platforms.add(p.abbreviation)
    }
    return Array.from(platforms)
  })

  // Liste des années de sortie disponibles pour le filtre
  const availableYears = computed(() => {
    const years = new Set()
    for (const g of store.games) {
      const y = g.expected_release_year || new Date(g.original_release_date).getFullYear()
      if (y) years.add(y)
    }
    return Array.from(years).toSorted((a, b) => b - a) // tri décroissant
  })

  // Jeux filtrés et triés selon les filtres et l'ordre
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

  // Inverser l'ordre de tri
  function toggleSortOrder () {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  }
</script>

<template>
  <v-container>
    <!-- Filtres -->
    <GameFilters
      :filters="filters"
      :genres="availableGenres"
      :platforms="availablePlatforms"
      :sort-order="sortOrder"
      :years="availableYears"
      @toggle-sort="toggleSortOrder"
    />

    <!-- Liste des jeux -->
    <v-row>
      <v-col v-for="game in filteredAndSortedGames" :key="game.id" cols="12" md="4">
        <GameCard :game="game" />
      </v-col>
    </v-row>

    <!-- Message si aucun jeu ne correspond aux filtres -->
    <v-alert v-if="filteredAndSortedGames.length === 0" class="mt-8" type="info">
      Aucun jeu ne correspond à vos filtres.
    </v-alert>
  </v-container>
</template>
