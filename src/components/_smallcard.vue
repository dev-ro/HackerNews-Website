<template>
  <div class="card">
    <div class="card--img">
      <img src="" alt="">
      <span >{{title.charAt('0')}}</span>
    </div>
    <div class="card--des">
      <h3><a :href="link">{{titlecutter(title)}}</a></h3>
      <p class="mt-1 timestampshow"><span><font-awesome-icon :icon="['fas', 'clock']" class="mr-2" /></span>{{time | time_converter}}</p>
    </div>
    <a class="lbtn" :href="link" v-if="linkbtn">
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    link: {
      type: String,
      default: '/'
    },
    time: {
      type: Number
    },
    linkbtn: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      cardTitle: this.title
    }
  },
  methods: {
    titlecutter (title) {
      if (title.length > 57) {
        return this.title.substr(0, 57) + '...'
      }
      return title
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/variables';
  .card {
    box-shadow: 0 0 5px rgba($color: #000000, $alpha: .05);
    border: 1px solid $gray-light;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding:.6rem;
    &--img {
      display: flex;
      justify-content: center;
      align-items: center;
      background: $secondary-color;
      min-width: 40px;
      min-height: 40px;
      margin-right: .7rem;
      border-radius: 100%;
      span {
        color: $white;
        font-size: 1rem;
        font-weight: bolder;
      }
    }

    &--des {
      h3 {
        font-size: .9rem;
        font-weight: 600;
        margin:0;
        color: $secondary-color;
        a {
          text-decoration: none;
          color: inherit;
          &:hover {
            color: $primary-color;
          }
        }
      }
    }
    .lbtn {
      width: 25px;
      height: 25px;
      background: $primary-color;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $white;
      margin-left: auto;
      transition: all .1s ease-in;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
</style>
