<template>
  <article>
    <slice-zone :components="components" :slices="document.data.slices" />
    <!-- <prismic-text :field="document.data.hallo"/> -->
    <p>{{$prismic.asText(document.data.hallo)}}</p>
    <<slice-zone :components="components" :slices="document.data.body"/>
  </article>
</template>

<script>
import { components } from '~/slices'

export default {
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID(
      'test',
      'testdoc'
    )

    if (document) {
      console.log(document.data)
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
    data () {
    return { components }
  }
}
</script>