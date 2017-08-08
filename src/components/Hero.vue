<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hero {
    width: calc(100% + 30px);
    display: block;
    overflow: hidden;
    margin: 0 -15px;
  }

  @media screen and (max-width: 1000px) {
    .logo-wrapper img {
      max-width: 90%;
    }
  }
</style>

<script>

  export default {
    name: 'Hero',
    data: function () {
      return {
        alt: 'ALT',
        payoff: 'PAYOFF',
        image: 'Background-image'
      }
    }
  }
</script>

<template>
  <div class="hero row">
      hero
  </div>
</template>
