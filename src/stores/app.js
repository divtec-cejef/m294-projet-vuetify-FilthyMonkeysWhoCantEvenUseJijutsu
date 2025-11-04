import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    games: [],
  }),
  actions: {
    addFavorite (game) {
      if (!this.favorites.find(f => f.id === game.id)) {
        this.favorites.push(game)
        this.saveFavorites()
      }
    },
    removeFavorite (id) {
      this.favorites = this.favorites.filter(g => g.id !== id)
      this.saveFavorites()
    },
    saveFavorites () {
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
  },
})
