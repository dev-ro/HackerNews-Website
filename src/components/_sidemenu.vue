.<template>
  <div class="side-menu" :class="openSideMenu ? 'sidemenuactive' : ''">
    <div>
        <div class="side-menu--close" @click="closeSideMenu()">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </div>
        <ul class="side-menu--links-box">
        <li>
            <router-link :to="{ name: 'Home' }" exact class="nav-link"
            >Home</router-link
            >
        </li>
        <li>
            <router-link :to="{ name: 'About' }" exact class="nav-link"
            >About</router-link
            >
        </li>
        <Menu />
        </ul>
    </div>
    <div>
        <p class="text-center">Follow Us:</p>
        <SocialLinks/>
    </div>
  </div>
</template>

<script>
import SocialLinks from './_social_links'
import Menu from './_menus'
export default {
  name: 'SideManu',
  props: ['openSideMenu'],
  methods: {
    closeSideMenu () {
      this.$emit('close-side-menu')
    }
  },
  components: {
    Menu,
    SocialLinks
  }
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';
.side-menu {
    position: fixed;
    top: 0;
    right:0;
    overflow-x: scroll;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 240px;
    height: 100%;
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.08);
    background: $primary-color;
    padding: 1rem 1.4rem;
    color: $white;
    z-index: 999999;
    transition: all .1s ease-in;
    transform: translateX(250px);
    &--close {
        width: 30px;
        height: 30px;
        background: #1D3557;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        display: flex;
        border-radius: 100%;
        box-shadow: 0 0 4px 0px #00000082;
    }
    &--links-box {
        padding: 1.4rem;
        display: flex;
        flex-direction: column;
        list-style: none;

        li {
            a {
              text-decoration: none;
                font-weight: 500;
                color: $white;
                display: block;
                padding: 0.5rem 1rem;
            }

            &:hover  a {
                color: $secondary-color !important;
            }
        }
    }
    .router-link-exact-active {
        color: $secondary-color !important;
    }
}

.side-menu.sidemenuactive {
  transform: translateX(0);
}
</style>
