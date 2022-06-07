<template>
  <div>
    <section v-if="slice.variation == 'default'" class="section">
      <section class="contentText">
        <h2 class="title">{{ $prismic.asText(slice.primary.title) }}</h2>
        <p>{{ $prismic.asText(slice.primary.description) }}</p>
      </section>
      <PrismicImage :field="slice.primary.chapterimage" />
    </section>
    <section v-else class="section alt">
      <section class="contentText">
        <h2 class="title">{{ $prismic.asText(slice.primary.title) }}</h2>
        <p>{{ $prismic.asText(slice.primary.description) }}</p>
      </section>
      <PrismicImage :field="slice.primary.chapterimage" />
    </section>
  </div>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  name: 'ChapterSection',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
}
</script>

<style scoped>
.alt {
  flex-flow: row-reverse; 
}
.section {
  /* background: #f7f7f7; */
  color: #111;
  padding: 1em;
  text-align: center;
  display: flex;
}
.section img {
  width: clamp(20em, 50%, 100%);
}

.contentText {
  text-align: left;
  /* padding: 0 1em; */
}
.contentText p {
  max-width: 65ch;
  width: clamp(15em, 65ch, 40vw);
}

.title {
  /* margin-bottom: 2em; */
  margin-top: 0;
}

@media only screen and (max-width: 600px) {
  .section {
    flex-direction: column;
  }
  .contentText,
  .contentText p {
    width: 100%;
  }
}
</style>
