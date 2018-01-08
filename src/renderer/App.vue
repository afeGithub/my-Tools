<template>
  <div id="app">
    <transition
            name="fade"
            enter-active-class="fadeIn"
            leave-active-class="fadeOut">
    <router-view ></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'my-tools'
  }
</script>

<style>
  /* CSS */

</style>
