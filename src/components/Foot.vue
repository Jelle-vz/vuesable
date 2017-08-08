<style scoped>
	footer {
		padding: 3rem 0;
	}
	.links {
		padding-top: 20px;
	}

  .container .row div[class^="col-"] {
    margin-bottom: 2rem;
  }

</style>
<script>
  import ClickForEmail from '@/atoms/ClickForEmail'
  import ClickForPhone from '@/atoms/ClickForPhone'

  export default {
    props: {
      theme: {
        type: String
      }
    },
    components: {
      ClickForEmail,
      ClickForPhone
    },
    data () {
      return {
        data: ''
      }
    }
  }
</script>

<template>
  <footer class="container-fluid" v-bind:class="theme">
			<div class="container footer--inner">
				<div class="row">
					<div class="col-sm-12 col-md-1 text-center logo">
						Footer
					</div>
				</div>
			</div>
	</footer>
</template>
