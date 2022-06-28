<template>
  <section
    :style="{
      backgroundImage: 'url(' + slice.primary.backgroundImage.url + ')',
    }"
  >
    <div class="header-content">
      <PrismicRichText :field="slice.primary.title" class="title" />
      <PrismicRichText
        id="header-block-h1"
        :field="slice.primary.description"
      />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  name: 'HeroComponent',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
}
</script>

<style scoped>
section {
  top: -7em;
}

@media only screen and (max-device-width: 820px) {
  section {
    top: 0;
  }
}

section {
  height: 25vw;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-color: #ffcc00;
  width: 100vw;
  position: absolute;
  top: 1em;
  left: 0;
  /* margin-bottom: 10em; */
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  position: absolute;
  font-size: 3.5vw;
  color: #fff021;
  width: 100%;
  margin-top: 2em;
}

#header-block-h1 {
  position: absolute;
  font-size: 1.1vw;
  font-style: italic;
  color: white;
  width: 40%;
  margin-top: 14em;
  width: 50%;
}
</style>
