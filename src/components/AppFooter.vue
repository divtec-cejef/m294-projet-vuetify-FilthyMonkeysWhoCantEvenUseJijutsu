<template>
  <v-footer class="steam-footer pa-8">
    <v-container>
      <v-row class="mb-6" justify="space-between">
        <!-- Column 1: Company / About -->
        <v-col cols="12" md="3">
          <h3 class="footer-title">Vapor</h3>
          <v-list dense>
            <v-list-item>
              <v-list-item-content>
                <RouterLink class="footer-link" to="/about">À propos</RouterLink>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <RouterLink class="footer-link" to="/wishlist">Favoris</RouterLink>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Column 2: Support / Links -->
        <v-col cols="12" md="3">
          <h3 class="footer-title">Support</h3>
          <v-list dense>
            <v-list-item>
              <v-list-item-content>
                <RouterLink class="footer-link" to="/contact">Contact</RouterLink>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <RouterLink class="footer-link" to="/faq">FAQ</RouterLink>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Column 3: Social -->
        <v-col class="d-flex flex-column" cols="12" md="3">
          <h3 class="footer-title">Follow us</h3>
          <div class="d-flex gap-4 mt-2">
            <v-btn
              class="text-white"
              href="https://github.com/johndoe"
              icon
              target="_blank"
              variant="text"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn
              class="text-white"
              href="https://twitter.com/yourprofile"
              icon
              target="_blank"
              variant="text"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              class="text-white"
              href="https://discord.gg/yourinvite"
              icon
              target="_blank"
              variant="text"
            >
              <v-icon>mdi-discord</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Divider -->
      <v-divider class="my-4" color="rgba(255,255,255,0.1)" />

      <!-- Legal / copyright -->
      <v-row justify="center">
        <v-col class="text-center text-white text-body-2" cols="12">
          © {{ new Date().getFullYear() }} Vapor. All rights reserved.
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
</script>

<style scoped>
.steam-footer {
  background-color: #1b1b1b;
  color: white;
  backdrop-filter: blur(6px);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-title {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover {
  color: white;
}

.v-btn > .v-icon {
  font-size: 20px;
  transition: color 0.2s;
}

.v-btn:hover > .v-icon {
  color: #1da1f2; /* subtle glow on hover */
}
</style>
