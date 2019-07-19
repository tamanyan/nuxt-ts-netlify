<template>
  <button>
    <slot>>Mybutton</slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Mybutton extends Vue {}
</script>
