<template>
  <div class="welcome">
    <img :src="backimg" class="back">
    <div class="content">
      <img :src="logo">
    </div>
    <router-link  to="/index"><img :src="arrowimg" class="arrow"></router-link>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      backimg: require("../assets/welcome/back.jpg"),
      arrowimg: require("../assets/welcome/arrow.png"),
      logo: require("../assets/welcome/logotitle.png"),
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome{
  position: absolute;
}
.welcome .back{
  width: 100%;
}
.welcome .arrow{
  width: 120px;
  position: absolute;
  top: calc(50% - 25px);
  right: 180px;
  transition: all 1s ease;
  -webkit-transition: all 1s ease;
}
.welcome .arrow:hover{
  right: 150px;
}
.welcome .content{
  position: absolute;
  left: 180px;
  top: calc(50% - 25px);
  width: 320px;
}
.welcome .content img{
  width: 100%;
}
</style>
