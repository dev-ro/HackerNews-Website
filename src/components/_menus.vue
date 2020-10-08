<template>
<div>
    <li><router-link :to="{name: 'TopStories'}" exact>Top Stories</router-link></li>
    <li><router-link :to="{name: 'Jobs'}" exact>Jobs</router-link></li>
</div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style>

</style>
