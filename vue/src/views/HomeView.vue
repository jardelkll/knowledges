<template>
  <div>
    <Banner/>
    <div class="main-container">
      <h1>{{ $store.state.titles.home }}</h1>
      <p></p>
      <Form/>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue"
import Form from "../components/Form.vue"

export default {
  name: 'HomeView',
  components: {
    Banner,
    Form
  },
  created(){
    const newData = {
      param1: 'teste1',
      param2: 'teste2',
      param3: 'teste3'
    }
    this.$store.commit('testeMut',newData) 
  }
}
</script>
