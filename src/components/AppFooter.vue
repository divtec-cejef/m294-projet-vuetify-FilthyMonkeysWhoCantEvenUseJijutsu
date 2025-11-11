<template>
  <!-- Pied de page principal -->
  <v-footer class="pretty-footer py-6">
    <v-container class="text-center">

      <!-- Liens vers les réseaux sociaux -->
      <div class="socials mb-2">
        <span class="label">Socials :</span>
        <a class="social-link" href="https://github.com" target="_blank">GitHub</a>
        <a class="social-link" href="https://twitter.com" target="_blank">Twitter</a>
        <a class="social-link" href="https://discord.com" target="_blank">Discord</a>
      </div>

      <!-- Mentions légales -->
      <div class="text-muted text-body-2">
        © {{ new Date().getFullYear() }} Vapor — Tous droits réservés.
      </div>

    </v-container>
  </v-footer>
</template>

<script setup>
// Composant purement visuel
</script>

<style scoped>
/* Style général du footer */
.pretty-footer {
  background: radial-gradient(circle at top, #191a1f, #0e0e12 70%);
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  text-align: center;
}

/* Libellé "Socials" */
.label {
  color: rgba(255, 255, 255, 0.7);
  margin-right: 8px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* Liens sociaux */
.social-link {
  color: rgba(255, 255, 255, 0.85);
  margin: 0 6px;
  text-decoration: none;
  transition: color 0.2s ease, text-shadow 0.2s ease;
  font-weight: 500;
}

.social-link:hover {
  color: #66aaff;
  text-shadow: 0 0 6px rgba(102, 170, 255, 0.5);
}

/* Texte des mentions légales */
.text-muted {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
}

/* Marges pour la ligne des réseaux sociaux */
.socials {
  margin-bottom: 6px;
}
</style>
