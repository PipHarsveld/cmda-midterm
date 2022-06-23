<template>
  <div>
    <p>test</p>
    <!-- <div v-for="item in"></div> -->
    <div v-html="$prismic.asHTML(document.data.title)"></div>
    {{ document.data }}
  </div>
</template>

<script>
export default {
  name: 'OldIndex',
  data() {
    return {
      document: {},
    }
  },
  async fetch() {
    this.document = await this.$prismic.api.getSingle('homepage')
  },
}
</script>
<style>
div {
  margin-top: 6em;
}
</style>