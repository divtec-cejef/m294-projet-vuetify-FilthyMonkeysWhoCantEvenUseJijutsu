import { defineStore } from 'pinia'
import api from '@/plugins/api'

export const useAppStore = defineStore('app', {
  state: () => ({
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    games: [],
    error: null,
  }),

  actions: {
    addFavorite (game) {
      if (!this.favorites.some(f => f.id === game.id)) {
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

    // Online API (with trailing slash — prevents 301 redirect → CORS)
    async fetchGames () {
      try {
        const response = await api.get('/games', {
          params: {
            field_list: 'id,name,image,genres',
            format: 'json',
          },
        })

        // ✅ Make sure we have valid results
        const games = response.data.results || []

        // ✅ Normalize genre data (prevent undefined errors)
        this.games = games.map(g => ({
          ...g,
          genres: g.genres || [], // always an array
        }))

        console.log('✅ Loaded games from API:', this.games.length)
      } catch (error) {
        console.warn('⚠️ API unavailable, using offline data...')
        this.error = error.message
        await this.fetchGamesOffline()
      }
    },

    // inside actions:
    async fetchGamesOffline () {
      try {
        const response = await fetch('/api/games.json')
        const data = await response.json()
        this.games = data.results || []

        // 🧠 Add fake genres for testing
        const fakeGenres = ['Action', 'Adventure', 'RPG', 'Shooter', 'Strategy', 'Puzzle']
        for (const game of this.games) {
          // assign 1–2 random genres
          game.genres = Array.from(
            { length: Math.floor(Math.random() * 2) + 1 },
            () => ({ name: fakeGenres[Math.floor(Math.random() * fakeGenres.length)] }),
          )
        }

        console.log('📦 Loaded games from local JSON (with fake genres):', this.games.length)
      } catch (error) {
        console.error('❌ Failed to load local games.json:', error)
      }
    },

    async init () {
      if (this.games.length === 0) {
        await this.fetchGames()
      }
    },
  },
})
