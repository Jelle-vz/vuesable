<script>
  /* eslint-disable */
  import Hero from '@/components/Hero'
  import Teaser from '@/components/Teaser'
  import ListofCards from '@/components/ListofCards'
  import Clients from '@/components/Clients'

  let components = require('./../components/index.json');

  export default {
    name: 'Home',
    head: {
      title: {
        inner: 'NNIP'
      },
      meta: require('./../data/metadata_default.json'),
      link: [
        { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css' },
        { rel: 'icon', href: require('./../../static/images/icons/16x16.png') }
      ]
    },
    components: {
      components
    },
    data () {
      return {
        components
      }
    },
    methods: {
      renderList: function(path, components){
        return  components.reduce(function(result, item){
          return result + `<li><a href="/${path}/${item}">${item}</a></li> `
        }, "")
      }
    }
  }
</script>

<template>
  <div class="home container-fluid">
    <div class="col-sm-3">
      <h3>Components</h3>
      <ul v-html="renderList('components', components)"></ul>
    </div>
  </div>
</template>
