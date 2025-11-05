<template>
  <v-row align="center" class="mb-4">
    <v-col cols="12" md="3">
      <v-select
        v-model="filters.genre"
        :items="['Tous', ...genres]"
        label="Filtrer par genre"
        prepend-inner-icon="mdi-filter-variant"
      />
    </v-col>

    <v-col cols="12" md="3">
      <v-select
        v-model="filters.platform"
        :items="['Toutes', ...platforms]"
        label="Filtrer par plateforme"
        prepend-inner-icon="mdi-gamepad-variant"
      />
    </v-col>

    <v-col cols="12" md="3">
      <v-select
        v-model="filters.year"
        :items="['Toutes', ...years]"
        label="Filtrer par année"
        prepend-inner-icon="mdi-calendar"
      />
    </v-col>

    <v-col cols="12" md="3">
      <v-btn color="secondary" variant="elevated" @click="$emit('toggle-sort')">
        Trier: {{ sortOrder === 'asc' ? 'A → Z' : 'Z → A' }}
      </v-btn>
    </v-col>

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
  defineProps({
    filters: Object,
    genres: Array,
    platforms: Array,
    years: Array,
    sortOrder: String,
  })
  defineEmits(['toggle-sort'])
</script>
