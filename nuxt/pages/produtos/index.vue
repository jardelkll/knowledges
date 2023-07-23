<template>
   <div>
      <div class="container mx-auto">
         <h1 class="text-lg font-bold">Produtos</h1>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ratione commodi, doloribus eaque provident veniam animi aliquid ullam delectus quaerat illum neque dolorem, consectetur maxime nesciunt quam fugiat, similique atque!</p>
      </div>

      <br><br>

      <div v-for="product in products" :key="product.id" class="border-b border-gray-400 py-4">
         <p>{{ product.id+' - '+product.title }}</p>
      </div>

   </div>
</template>

<script>
export default {
   name: '',
   head() {
      return {
         title: 'Produtos',
         meta: [
            { hid: 'description', name: 'description', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem deserunt dolor nesciunt cumque error dignissimos' }
         ]
      }
   },
   data () {
      return {}
   },
   async asyncData({ $axios }){

      // teste espera da página
      /*
      await new Promise((resolve) => {
         setTimeout(() => {
            resolve()
            console.log('promise resolvida');
         },3000)
      })
      */

      const products = await $axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=20')
      return {
         products
      }

   },
   methods: {}
}
</script>

<style scoped>

</style>