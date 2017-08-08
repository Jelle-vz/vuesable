<style>
  @import "assets/css/defaults.css";
</style>

<script>
  import Foot from '@/components/Foot'

  export default {
    name: 'app',
    components: {
      Foot
    }
  }
</script>

<template>
  <div id="app container-fluid">
    <router-view></router-view>
    <Foot theme="theme-black"></Foot>
  </div>
</template>

