<template>
  <div id="app">
    <transition
        name="out-in"
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft"
    >
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import 'vue2-animate/dist/vue2-animate.min.css';
export default {
  name: 'App',
}
</script>

<style>
.ivu-menu-submenu-title-icon{
    display: none !important;
}
</style>
