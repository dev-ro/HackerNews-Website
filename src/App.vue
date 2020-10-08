<template>
  <div id="app">
    <NavBar />
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import NavBar from './components/_navbar'
export default {
  name: 'MainApp',
  metaInfo: {
    title: 'HackerNews Clone'
  },
  data () {
    return {}
  },
  components: {
    NavBar
  }
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
@import "./scss/main.scss";
</style>
