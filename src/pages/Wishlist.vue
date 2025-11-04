<template>
  <v-container>
    <h1>Mes Favoris</h1>
    <v-row>
      <v-col v-for="game in store.favorites" :key="game.id" cols="12" md="4">
        <v-card>
          <v-img height="200px" :src="game.image?.medium_url"></v-img>
          <v-card-title>{{ game.name }}</v-card-title>
          <v-btn color="error" @click="store.removeFavorite(game.id)">Supprimer</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { useAppStore } from '@/stores/app'
  const store = useAppStore()
</script>
