<template>
  <!-- Ligne de filtres et tri -->
  <v-row align="center" class="mb-4">

    <!-- Filtre par genre -->
    <v-col cols="12" md="3">
      <v-select
        v-model="filters.genre"
        :items="['Tous', ...genres]"
        label="Filtrer par genre"
        prepend-inner-icon="mdi-filter-variant"
      />
    </v-col>

    <!-- Filtre par plateforme -->
    <v-col cols="12" md="3">
      <v-select
        v-model="filters.platform"
        :items="['Toutes', ...platforms]"
        label="Filtrer par plateforme"
        prepend-inner-icon="mdi-gamepad-variant"
      />
    </v-col>

    <!-- Filtre par année -->
    <v-col cols="12" md="3">
      <v-select
        v-model="filters.year"
        :items="['Toutes', ...years]"
        label="Filtrer par année"
        prepend-inner-icon="mdi-calendar"
      />
    </v-col>

    <!-- Bouton de tri -->
    <v-col cols="12" md="3">
      <v-btn color="secondary" variant="elevated" @click="$emit('toggle-sort')">
        Trier: {{ sortOrder === 'asc' ? 'A → Z' : 'Z → A' }}
      </v-btn>
    </v-col>

    <!-- Barre de recherche -->
    <v-col cols="12">
      <v-text-field
        v-model="filters.search"
        clearable
        label="Rechercher un jeu"
        prepend-inner-icon="mdi-magnify"
      />
    </v-col>

  </v-row>
</template>

<script setup>
/* Props reçues du parent */
  defineProps({
    filters: Object, // Objets contenant genre, platform, year et search
    genres: Array, // Liste des genres disponibles
    platforms: Array, // Liste des plateformes disponibles
    years: Array, // Liste des années disponibles
    sortOrder: String, // Ordre actuel du tri
  })

  /* Événement pour inverser le tri */
  defineEmits(['toggle-sort'])
</script>
