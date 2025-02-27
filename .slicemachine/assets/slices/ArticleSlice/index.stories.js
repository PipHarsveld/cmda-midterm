import MyComponent from '../../../../slices/ArticleSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ArticleSlice'
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
      mock: {"variation":"default","name":"Default","slice_type":"article_slice","items":[{"content":[{"type":"paragraph","text":"Esse eu aute nisi elit duis cupidatat deserunt consequat veniam laboris incididunt do.","spans":[]}]},{"content":[{"type":"paragraph","text":"Magna sit reprehenderit officia qui nostrud commodo mollit dolore laboris duis consectetur dolore.","spans":[]}]},{"content":[{"type":"paragraph","text":"Ad adipisicing id amet cupidatat fugiat eu est enim in nulla nostrud incididunt laborum velit. Sit laborum excepteur incididunt deserunt ipsum ex exercitation veniam eu. Proident ea fugiat sit irure officia officia magna irure aute ad veniam velit.","spans":[]}]},{"content":[{"type":"paragraph","text":"Pariatur fugiat incididunt reprehenderit nostrud nisi cupidatat in nisi minim sint.","spans":[]}]}],"primary":{},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'

export const _Single = () => ({
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
      mock: {"variation":"single","name":"single","slice_type":"article_slice","items":[],"primary":{"content":[{"type":"paragraph","text":"Elit sit fugiat tempor laborum reprehenderit Lorem ea officia nostrud. Ut cupidatat do enim proident reprehenderit amet excepteur dolor ipsum minim aliquip.","spans":[]}]},"id":"_Single"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Single.storyName = 'single'

export const _ImgLeft = () => ({
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
      mock: {"variation":"imgLeft","name":"imgLeft","slice_type":"article_slice","items":[],"primary":{"img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"},"content":[{"type":"paragraph","text":"Commodo fugiat dolore nisi. Exercitation id sit deserunt. Velit qui ullamco duis exercitation adipisicing ipsum officia in aliqua dolor veniam laborum.","spans":[]}]},"id":"_ImgLeft"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ImgLeft.storyName = 'imgLeft'

export const _ImgRight = () => ({
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
      mock: {"variation":"imgRight","name":"imgRight","slice_type":"article_slice","items":[],"primary":{"img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"content":[{"type":"paragraph","text":"Ut aute elit sit deserunt sunt fugiat anim amet excepteur proident anim velit adipisicing. Voluptate anim sit amet ullamco commodo fugiat fugiat magna fugiat pariatur qui sit qui. Nulla minim magna ad voluptate proident cupidatat consequat proident excepteur eu.","spans":[]}]},"id":"_ImgRight"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ImgRight.storyName = 'imgRight'
