<template>
  <div>
    <h2>links</h2>
    <div class="links">
      <nuxt-link
        v-for="(document, index) in documents.results"
        :key="index"
        :to="`/${document.uid}`"
        >{{ document.uid }}</nuxt-link
      >
    </div>
    <p>hello</p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  async asyncData({ $prismic, params, error }) {
    const documents = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'standaard')
    )
    if (documents) {
      console.log(documents.results)
      return { documents }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style scoped>
.links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
