import MyComponent from '../../../../slices/HeadingElement';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeadingElement'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"heading_element","items":[],"primary":{"title":[{"type":"heading1","text":"Reinvent seamless web-readiness","spans":[]}],"description":[{"type":"paragraph","text":"Laborum consequat quis ut ea ex duis commodo. Qui tempor ea cillum dolor officia aute sunt magna Lorem Lorem fugiat voluptate minim.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'

export const _Subheading = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"subheading","name":"subheading","slice_type":"heading_element","items":[],"primary":{"title":[{"type":"heading2","text":"Syndicate revolutionary mindshare","spans":[]}],"description":[{"type":"paragraph","text":"Et esse sint laborum commodo minim excepteur. Tempor enim duis enim ullamco aute deserunt. Labore magna deserunt anim ea aliqua consequat.","spans":[]}]},"id":"_Subheading"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Subheading.storyName = 'subheading'