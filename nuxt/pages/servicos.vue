<template>
   <div>
         <div class="container mx-auto">
            <h1 class="text-lg font-bold">Serviços</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ratione commodi, doloribus eaque provident veniam animi aliquid ullam delectus quaerat illum neque dolorem, consectetur maxime nesciunt quam fugiat, similique atque!</p>
            
            <NuxtLink to="/servicos/desenvolvimento-de-sites">
               Desenvolvimento de Sites
            </NuxtLink>
         
            <NuxtLink to="/servicos/marketing-digital">
               Marketing Digital
            </NuxtLink>

            <br><br><br>

            <pre>
               {{ $fetchState }}
            </pre>

            <div v-if="$fetchState.pending">
               Carregando ...
            </div>
            <div v-else>
               <div v-for="item in services" :key="item.id" class="border-b border-gray-400 py-4">
                  <p>{{ item.username+' - '+item.email }}</p>
               </div>
            </div>

            <NuxtChild />
            
         </div>
   </div>
</template>

<script>
export default {
   name: '',
   head() {
      return {
         title: 'Serviços',
         meta: [
            { hid: 'description', name: 'description', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem deserunt dolor nesciunt cumque error dignissimos' }
         ],
         bodyAttrs: {
            class: 'teste'
         }
      }
   },
   data () {
      return {
         services: []
      }
   },
   async fetch(){
      this.services = await this.$axios.$get('https://jsonplaceholder.typicode.com/users?_limit=20')
   },
   methods: {}
}
</script>

<style scoped>

</style>