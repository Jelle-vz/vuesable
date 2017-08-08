<script>
  export default {
    props: {
      theme: {
        type: String
      },
      data: {
        type: Object,
        required: true
      },
      align: {
        type: String
      }
    }
  }
</script>

<template>
  <div class="row teaser" :class="theme">
	  <div class="content container" :class="align">
		  <h2>{{data.title}}</h2>
		  <div v-html="data.text"></div>
		  <span v-if="data.readmoreLink">
			  <a :href="data.readmoreLink" class="btn btn-third">{{data.readmoreText ? data.readmoreText : "More info"}}</a>
		  </span>
			<span v-if="data.emailme">
			  <a :href="data.emailme" class="btn btn-third">{{data.emailmeText ? data.emailmeText : "Email me"}}</a>
		  </span>
	  </div>
  </div>
</template>
