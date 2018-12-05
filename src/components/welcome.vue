<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link  to="/index"><Button>-></Button></router-link>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      msg: 'Stupid Bread'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
