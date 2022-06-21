import MyComponent from '../../../../slices/SummaryComponent';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SummaryComponent'
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
      mock: {"variation":"default","name":"Default","slice_type":"summary_component","items":[{"summary":[{"type":"paragraph","text":"Magna tempor dolore qui ullamco do elit sit aliqua esse ad laboris esse enim. Dolor eiusmod aliqua ea duis sint dolore dolor eu anim.","spans":[]}]},{"summary":[{"type":"paragraph","text":"Aliquip laborum ad cillum proident laboris sunt aute voluptate do dolor duis et amet proident cupidatat.","spans":[]}]},{"summary":[{"type":"paragraph","text":"Cupidatat occaecat velit amet occaecat veniam fugiat ea minim deserunt ad.","spans":[]}]},{"summary":[{"type":"paragraph","text":"Minim sunt ad cupidatat dolore consectetur sint voluptate veniam. Ut ad laboris culpa ex sunt quis incididunt nisi enim culpa duis dolor dolor. Reprehenderit magna et elit Lorem non labore minim adipisicing proident.","spans":[]}]},{"summary":[{"type":"paragraph","text":"Esse minim nostrud ullamco qui exercitation dolor Lorem pariatur pariatur dolore sint excepteur sit.","spans":[]}]}],"primary":{"componentIndex":"unleash vertical systems","title":[{"type":"heading1","text":"Engage sexy bandwidth","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'