<template>
  <section v-if="pos == 'single' && content.length == 1">
    <p v-for="(elem, index) in content" :key="index">
      {{ elem }}
    </p>
  </section>
  <section v-else-if="pos == 'imgLeft'">
    <p v-for="(elem, index) in content" :key="index">
      {{ elem }}
    </p>
    <nuxt-img :src="img" sizes="sm100vw md:50vw lg:400px" class="img" />
  </section>
  <section v-else-if="pos == 'imgRight'" class="alt">
    <nuxt-img :src="img" sizes="sm100vw md:50vw lg:400px" class="img" />
    <p v-for="(elem, index) in content" :key="index">
      {{ elem }}
    </p>
  </section>
  <section v-else class="multipleArticles">
    <p v-for="(elem, index) in content" :key="index">
      {{ elem }}
    </p>
  </section>
</template>


<script>
export default {
  props: {
    pos: { type: String, default: 'single' },
    img: { type: String, default: '/TestImage.jpeg' },
    content: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped>
p {
  margin: 1em 0;
}

section {
  display: grid;
  gap: 0 60px;
  margin: 2em 0;
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