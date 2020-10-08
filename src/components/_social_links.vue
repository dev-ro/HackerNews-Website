<template>
    <ul class="social-links">
        <li><a href=""><font-awesome-icon :icon="['fab', 'facebook-f']" /></a></li>
        <li><a href=""><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
        <li><a href=""><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
    </ul>
</template>
<script>
export default {
  name: 'SocialLinksComponent'
}
</script>
<style lang="scss" scoped>
    @import '../scss/_variables.scss';
    .social-links {
        list-style: none;
        display: flex !important;
        flex-direction: row !important;
        justify-content: space-evenly;
        padding: 1.4rem;
        border-top: 1px solid #bfbfbf;
        li {
            a {
                color: $white;
            }

            &:hover a {
                color: $secondary-color !important;
            }
        }
    }
</style>
