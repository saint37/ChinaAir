<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/common/header'
import Footer from '@/common/footer'

export default {
  name: 'App',
  components:{
    Header,Footer
  }
}
</script>

<style>

</style>
