<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        Nuxt TypeScript Sample
      </h1>
      <h2 class="subtitle">
        {{ subtitle }}
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '../components/Logo.vue'


@Component({
  components: {
    Logo,
  }
})
export default class Index extends Vue {

  subtitle: string = 'Nuxt TypeScript Project!'

  async mounted() {
    // Call Netlify Functions
    const response = await this.$axios.$get('./.netlify/functions/hello')

    // Set subtitle from message
    this.subtitle = response.msg

    console.log('Your branch is', process.env.BRANCH)
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
