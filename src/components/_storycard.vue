<template>
    <div class="st-box d-flex">
      <div class="st-box--title-letter-box">
        <span>{{title.charAt('0')}}</span>
      </div>
      <div class="st-box--des">
        <h6><a :href="link">{{title}}</a></h6>
        <p v-if="descshow">{{description}}</p>
        <time-n-user :timestamp="time"  :createdbyuser="createdby"/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'StoryCard',
  props: {
    title: {
      type: String,
      default: 'Lorem ipsum dolor sit amet.'
    },
    description: {
      type: String,
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, enim praesentium. Soluta dolores iste quidem neque. ......'
    },
    descshow: {
      type: Boolean,
      default: true
    },
    time: {
      type: Number
    },
    link: {
      type: String,
      default: '/'
    },
    createdby: {
      type: String,
      default: 'Admin'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/variables';
  .st-box {
    &--title-letter-box {
      background: $secondary-color;
      padding: .6rem;
      color: $white;
      margin-right: 1rem;
      height: 100%;
      span {
        display: flex;
        align-self: center;
        justify-content: center;
      }
    }

    &--des a {
      text-decoration: none !important;
      color: $secondary-color;

      &:hover {
        color: $primary-color;
      }
    }

    &:not(:last-child) {
      border-bottom: 1px solid $gray-light;
    }
  }
</style>
