<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/">home</router-link>
    <router-link to="/page1">page1</router-link>
    <router-link to="/page2">page2</router-link>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped lang="scss">

</style>
