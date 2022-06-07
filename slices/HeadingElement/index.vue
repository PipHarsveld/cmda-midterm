<template>
  <section class="section">
    <!-- <PrismicRichText :field="slice.primary.title" class="title" /> -->
    <h1 v-if="slice.variation == 'default'" class="title" >
      <prismicText :field="slice.primary.title"> </prismicText>
    </h1>
    <h1 v-else>
      <prismicText :field="slice.primary.title"> </prismicText>
    </h1>
    <PrismicRichText :field="slice.primary.description" />
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "HeadingElement",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style scoped>
.section {
  /* background: #f2f2f2; */
  color: #111;
  padding: 2em 2em;
  width: 100vw;
}
.title {
  font-weight: bold;
  font-size: clamp(1rem, 4em, 8rem); 

  color: var(--white);
  background-color: var(--black);

  width: max-content;

  padding: 1.25rem 1rem;
  margin: 0;
}

@media only screen and (max-width: 600px) {
  .title {
    font-size: 5vw;
  }
}

</style>
