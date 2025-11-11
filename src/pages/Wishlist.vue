<template>
  <v-container>
    <!-- Titre de la page -->
    <h1>Mes Favoris</h1>

    <!-- Liste des jeux favoris -->
    <v-row>
      <v-col v-for="game in store.favorites" :key="game.id" cols="12" md="4">
        <!-- Carte de jeu -->
        <v-card class="game-card" color="#1e1e2f" dark>
          <!-- Image du jeu -->
          <v-img height="200px" :src="game.image?.medium_url" />

          <!-- Titre du jeu -->
          <v-card-title class="text-white">
            {{ game.name }}
          </v-card-title>

          <!-- Bouton pour retirer des favoris -->
          <v-card-actions>
            <v-btn
              class="text-white"
              color="red-darken-2"
              variant="elevated"
              @click="store.removeFavorite(game.id)"
            >
              Supprimer
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { useAppStore } from '@/stores/app'

  // Accès au store global pour récupérer les favoris
  const store = useAppStore()
</script>
