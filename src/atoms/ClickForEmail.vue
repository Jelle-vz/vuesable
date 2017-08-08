<script>
  export default {
    name: 'Email',
    props: {
      name: {
        type: String
      }
    },
    data () {
      return {
        email: 'Click to show email'
      }
    },
    methods: {
      convertData: function (data) {
        this.email = '<a href=mailto:' + data + '@devmen.nl>' + data + '@devmen.nl </a>'
      }
    }
  }
</script>

<template>
  <span class="link" v-on:click="convertData(name)" v-html="email"></span>
</template>
