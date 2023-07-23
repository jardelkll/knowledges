<template>
   <div>
      <div class="container mx-auto">
         <h1 class="text-lg font-bold">A empresa</h1>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ratione commodi, doloribus eaque provident veniam animi aliquid ullam delectus quaerat illum neque dolorem, consectetur maxime nesciunt quam fugiat, similique atque!</p>
      </div>
   </div>
</template>

<script>
export default {
   name: '',
   //middleware() {},
   middleware: 'auth',
   data () {
      return {}
   },
   methods: {}
}
</script>

<style scoped>

</style>