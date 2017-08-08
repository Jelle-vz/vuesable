<script>
  export default {
    name: 'Email',
    props: {
      number: {
        type: String
      }
    },
    data () {
      return {
        phoneNumber: 'Click to see the phone number'
      }
    },
    methods: {
      convertData: function (data) {
        this.phoneNumber = '<a href=tel:' + data + '>' + data + '</a>'
      }
    }
  }
</script>

<template>
  <span class="link" v-on:click="convertData(number)" v-html="phoneNumber"></span>
</template>
