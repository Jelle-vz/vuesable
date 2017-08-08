<style scoped>
	.content {
		margin-top: -2rem;
		margin-bottom: 2rem;
		overflow: hidden;
	}
</style>
<script>
  import Slick from 'vue-slick'

  export default {
    components: { Slick },
    props: {
      theme: {
        type: String
      },
      data: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        slickOptions: {
          autoplay: true,
          arrows: false,
          autoplaySpeed: 6000,
          slidesToShow: 6,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            }
          ]
        }
      }
    }
  }
</script>

<template>
  <div class="row clients" :class="theme">
		<div class="content col-sm-12 text-center">
			<Slick ref="slick" :options="slickOptions" class="list-inline">
				<div class="list-inline-item" v-for="client in data">
					<img :src="client.src" :alt="client.name"/>
				</div>
			</Slick>
		</div>
	</div>
</template>
