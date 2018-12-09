<template>
  <div>
  	<Header></Header>
    <transition
        name="out-in"
        enter-active-class="animated fadeIn"
    >
        <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/common/header'
import Footer from '@/common/footer'
import 'vue2-animate/dist/vue2-animate.min.css';
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
