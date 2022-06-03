import MyComponent from '../../../../slices/TableSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TableSlice'
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
      mock: {"variation":"default","name":"Default","slice_type":"table_slice","items":[{"competentiesOld":"leverage rich e-business","competentiesNew":"target sexy vortals"},{"competentiesOld":"mesh world-class e-markets","competentiesNew":"engage global schemas"},{"competentiesOld":"drive efficient relationships","competentiesNew":"synergize granular web-readiness"}],"primary":{"title":[{"type":"heading1","text":"Synergize end-to-end supply-chains","spans":[]}],"description":[{"type":"paragraph","text":"Fugiat qui nisi nisi est proident incididunt ad reprehenderit ad elit consectetur qui ex.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
