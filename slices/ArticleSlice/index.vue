<template>
  <section v-if="slice.variation == 'single'">
    <PrismicRichText :field="slice.primary.content" />
  </section>
  <section v-else-if="slice.variation == 'imgLeft'">
    <PrismicRichText :field="slice.primary.content" />
    <PrismicImage :field="slice.primary.img" class="img" />
    <!-- <nuxt-img
      :src="slice.primary.img"
      sizes="sm100vw md:50vw lg:400px"
      class="img"
    /> -->
  </section>
  <section v-else-if="slice.variation == 'imgRight'" class="alt">
    <PrismicImage :field="slice.primary.img" class="img" />
    <PrismicRichText :field="slice.primary.content" />
    <!-- <nuxt-img :src="img" sizes="sm100vw md:50vw lg:400px" class="img" />
    <p v-for="(elem, index) in content" :key="index">
      {{ elem }}
    </p> -->
  </section>
  <section v-else class="multipleArticles">
    <p v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <PrismicRichText :field="item.content" />
    </p>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  name: 'ArticleSlice',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
}
</script>

<style scoped>
p {
  margin: 1em 0;
}

section {
  display: grid;
  gap: 0 60px;
  margin: 2em;
  padding: 1em;
}
.img {
  width: clamp(100%, 20em, 25em);
  object-fit: cover;
  object-position: bottom;
}

.alt > * {
  justify-self: end;
}

@media screen and (min-width: 821px) {
  section {
    grid-template-columns: repeat(2, 1fr);
  }

  .alt > * {
    justify-self: start;
  }
}
</style>