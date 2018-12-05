<template>
  <div>
  	<Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/common/header'
import Footer from '@/common/footer'
export default {
  name: 'HelloWorld',
  components:{
    Header,Footer
  },
  data () {
    return {
      msg: 'layout'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
