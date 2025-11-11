import { fileURLToPath, URL } from 'node:url'
import Vue from '@vitejs/plugin-vue'

// Plugins
import AutoImport from 'unplugin-auto-import/vite'
import Fonts from 'unplugin-fonts/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'

// Utilitaires
import { defineConfig } from 'vite'

import Layouts from 'vite-plugin-vue-layouts-next'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Gestion automatique des routes Vue
    VueRouter(),

    // Gestion automatique des layouts
    Layouts(),

    // Support Vue + transformation des assets Vuetify
    Vue({
      template: { transformAssetUrls },
    }),

    // Plugin Vuetify avec auto-import et styles personnalisés
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss', // Fichier SCSS de configuration Vuetify
      },
    }),

    // Import automatique des composants Vuetify
    Components(),

    // Import des polices Google
    Fonts({
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900', // Variantes de Roboto
          },
        ],
      },
    }),

    // Auto-import pour Vue, Pinia et Vue Router
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        {
          pinia: ['defineStore', 'storeToRefs'], // Fonctions Pinia à importer automatiquement
        },
      ],
      eslintrc: { enabled: true }, // Génère un fichier ESLint pour les imports automatiques
      vueTemplate: true, // Permet l'auto-import dans les templates
    }),
  ],

  // Dépendances à exclure de l'optimisation (éviter les conflits)
  optimizeDeps: {
    exclude: [
      'vuetify',
      'vue-router',
      'unplugin-vue-router/runtime',
      'unplugin-vue-router/data-loaders',
      'unplugin-vue-router/data-loaders/basic',
    ],
  },

  // Définitions globales pour le code qui utilise `process.env`
  define: { 'process.env': {} },

  // Résolution des alias et extensions
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)), // Alias @ pour src/
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'], // Extensions reconnues automatiquement
  },

  // Configuration du serveur de développement
  server: {
    host: '127.0.0.1',
    port: 3001,
    proxy: {
      '/giantbomb': {
        target: 'https://www.giantbomb.com/api/', // Proxy vers l'API Giant Bomb
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/giantbomb/, ''), // Supprime le préfixe /giantbomb
        headers: { 'User-Agent': 'VueStudentProject/1.0' }, // User-Agent custom pour l'API
      },
    },
  },

  // Options pour les préprocesseurs CSS
  css: {
    preprocessorOptions: {
      sass: { api: 'modern-compiler' }, // SASS moderne
      scss: { api: 'modern-compiler' }, // SCSS moderne
    },
  },
})
