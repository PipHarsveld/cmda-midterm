import MyComponent from '../../../../slices/ChapterSection';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ChapterSection'
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
      mock: {"variation":"default","name":"Default","slice_type":"chapter_section","items":[],"primary":{"title":[{"type":"heading1","text":"Expedite frictionless applications","spans":[]}],"description":[{"type":"paragraph","text":"Culpa non pariatur aute ad sit in laboris fugiat aute do proident eu incididunt. Eu qui reprehenderit sint deserunt. Mollit veniam nulla ipsum dolore magna et dolor sint cupidatat.","spans":[]}],"chapterimage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'

export const _ImageLeft = () => ({
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
      mock: {"variation":"imageLeft","name":"Image-left","slice_type":"chapter_section","items":[],"primary":{"title":[{"type":"heading1","text":"Transition compelling ROI","spans":[]}],"description":[{"type":"paragraph","text":"Tempor ut proident veniam quis magna tempor deserunt ipsum deserunt irure enim et ad ad excepteur.","spans":[]}],"chapterimage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"}},"id":"_ImageLeft"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ImageLeft.storyName = 'Image-left'
