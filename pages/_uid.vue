<template>
  <section>
    <header>
      <!-- Introductie van de standaard -->
      <PrismicRichText :field="document.data.title" />
      <PrismicRichText :field="document.data.introduction" />
    </header>

    <article v-for="(chapter, index) in document.data.chapters" :key="index">
    <!-- 1.1 hoofdstuk -->
      <PrismicRichText :field="chapter['chapter-title']" class="title" />
      <section class="content">
        <!-- Content van het hoofdstukje, dus bv foto's animaties, tekst -->
        <Prismic-image v-if="chapter['img']" :field="chapter['img']"  />
        <PrismicRichText :field="chapter['content-of-chapter']" />
      </section>
    </article>
    <slice-zone :components="components" :slices="document.data.slices"/>
  </section>
</template>

<script>
import { components } from '~/slices'
export default {
  async asyncData({$prismic, params, error}) {
    const document = await $prismic.api.getByUID('standaard', params.uid)

    if (document) {
      return {document}
    } else {
      error({statuscode: 404, message: 'Page Not Found'})
    }
  }
}
</script>

<style scoped>
  .content {
    display: flex;
    background-color: lightgreen;
  }
</style>
