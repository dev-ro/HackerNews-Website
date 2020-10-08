<template>
  <header>
    <nav class="navbar navbar-expand navbar-light bg-light cs-menu">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><strong><span>N</span></strong></a>
        <search-form></search-form>
        <div class="h-btn" @click="hamOpen ? hamOpen = false : hamOpen = true">
          <font-awesome-icon :icon="['fas' , 'bars']" size="1x" :rotation="hamOpen == true ? '90' : '180'"/>
        </div>
        <SideMenu
          :openSideMenu="hamOpen"
          @close-side-menu="hamOpen=false"
        />
      </div>
    </nav>
    <SecondaryNav />
  </header>
</template>
<script>
import SearchForm from './_sForm'
import SecondaryNav from './_secondarymenu'
import SideMenu from './_sidemenu'
export default {
  name: 'Navbar',
  data () {
    return {
      hamOpen: false
    }
  },
  methods: {},
  watch: {},
  components: {
    SearchForm,
    SideMenu,
    SecondaryNav
  }
}
</script>
<style lang="scss" scoped>
    @import '../scss/_variables.scss';
    nav.cs-menu {
        background: $white;
        .navbar-brand {
            span {
                background: $primary-color;
                border-radius: 3px;
                padding:.4rem;
                color: #fff;
            }
        }

        .navbar-nav li a {
            font-weight: 600;
        }

        .h-btn {
            margin-left: 1rem;
            color: $primary-color;
            cursor: pointer;
            :hover {
                color: $secondary-color;
            }
            svg {
                font-size: 1.5rem;
                transition: all .2s ease-in;
            }
        }
    }
</style>
