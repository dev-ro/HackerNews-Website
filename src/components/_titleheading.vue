<template>
  <div class="title-heading d-flex">
    <h5>{{title}}</h5>
    <slot name="rightmenu"></slot>
  </div>
</template>

<script>
export default {
  name: 'TitleHeadingSection',
  props: ['title'],
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
    @import '../scss/variables';
    .title-heading {
        align-items: center;
        justify-content: space-between;
    }
</style>
