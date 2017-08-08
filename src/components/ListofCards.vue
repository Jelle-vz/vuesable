<style scoped>
  .justify-center {
    justify-content: center;
  }
  .content {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .2);
    margin-bottom: 1rem;
  }
  .card-header {
    height: 133px;
    background-color: black;
    margin-bottom: 50px
  }
  .card-header .card-text {
    display: block;
    color: white;
    font-size: 1.3rem;
  }
  .card-img-top {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 80px;
    left: 10px;
  }
  .card-label {
    background: #fbe108;
    padding: 2px 10px;
    position: absolute;
    top: 118px;
    right: 0;
  }
  .card-label.available {
    background: mediumseagreen;
    color: white;
  }
  .card-label.not_available {
    background: darkred;
    color: white;
  }

  .progress-label {
    position: absolute;
    text-transform: uppercase;
    color: black;
    font-size: 0.9rem;
    margin-left: 3px;
  }
  progress {
    border: none;
  }
  progress[value] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 20px;
  }
  progress[value]::-webkit-progress-bar {
    background-color: #efefef;
  }
  progress[value]::-webkit-progress-value {
    background-color: #ccc;
  }

  ::-moz-progress-bar {
    background-color: #ccc;
    border: none;
  }

</style>

<script>
  export default {
    props: {
      data: {
        type: Array,
        required: true
      },
      theme: {
        type: String
      }
    }
  }
</script>

<template>
  <div class="row intro" :class="theme">
	  <div class="content col-sm-12">
      <div class="row justify-center">
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="item in data">
          <div class="card">
            <img class="card-img-top" :src="item.avatar" :alt="data.name">
            <div class="card-header">
              <span class="card-text">{{ item.speciality }}</span>
              <!--<span class="card-label" :class="item.availability_label">{{ item.availability }}</span>-->
              <span class="card-label">{{ item.name }}</span>
            </div>
            <div class="card-block">
              <div class="skilmatrix">
                <div v-for="skill in item.skillset">
                  <span class="progress-label">{{skill.name}}</span>
                  <progress :value="skill.percentage" max="100"></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	  </div>
  </div>
</template>
