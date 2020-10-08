<template>
    <div class="main-menu">
        <div class="container">
            <ul class="navbar-nav">
                <li><router-link :to="{name: 'Home'}" exact>Home</router-link></li>
                <Menu class="d-flex" />
            </ul>
        </div>
    </div>
</template>
<script>
import Menu from './_menus'
export default {
  name: 'SecondaryMenu',
  components: {
    Menu
  }
}
</script>

<style lang="scss">
    @import '../scss/_variables.scss';
    .main-menu {
        background: $secondary-color;
        ul {
            flex-direction: row;
            li {
                a {
                    color: $white;
                    padding: .4rem 1rem;
                    font-weight: 500;
                    display: flex;
                    text-decoration:none;
                    transition: all .2s ease-in;
                    &:hover {
                        background: $primary-color;
                    }
                }
            }
        }

        .router-link-exact-active {
            background: $primary-color !important;
        }
    }

    @media (max-width: 576px) {
      .main-menu {
        display: none;
      }
    }
</style>
