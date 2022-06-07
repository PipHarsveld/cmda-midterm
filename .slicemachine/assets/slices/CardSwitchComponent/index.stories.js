import MyComponent from '../../../../slices/CardSwitchComponent';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CardSwitchComponent'
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
      mock: {"variation":"default","name":"Default","slice_type":"card_switch_component","items":[{"oldComp":"evolve rich e-commerce","newComp":"strategize wireless markets"},{"oldComp":"facilitate end-to-end e-business","newComp":"morph e-business blockchains"},{"oldComp":"iterate B2C solutions","newComp":"generate bricks-and-clicks blockchains"}],"primary":{"title":[{"type":"heading1","text":"Grow mission-critical mindshare","spans":[]}],"description":[{"type":"paragraph","text":"Laborum laboris amet aliqua eu cupidatat adipisicing.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
