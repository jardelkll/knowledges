<template>
  <div>

    <pre>
      {{ $config }}
    </pre>
    
    <br><br><br>

    <VTooltip>
      <a>Sponsor me</a>
      <template #popper>
          Help me fund my open source work!
      </template>
    </VTooltip> 

    <pre>
      {{ $store.state.user }}
    </pre>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'IndexPage',
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  asyncData({ $config }){
    console.log($config);
  },
  mounted(){
    console.log(this.$name('Jon Snow'));
    console.log(this.$dayjs().format('DD/MM/YYYY HH:mm'));
  }
}
</script>
