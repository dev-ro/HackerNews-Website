<template>
<div class="vld-parent" id="topStories">
    <loading :height="40" :active.sync="isLoading"
    :is-full-page="false"></loading>
    <title-heading :title="widgetTitle" class="mb-3"></title-heading>
    <div class="topstories" v-for="(story, index) in topstories" :key="index">
        <h6 class="topstories-des"><a :href="story.url" v-html="story.title"></a></h6>
        <time-n-user
            :timestamp="story.time"
            :createdbyuser="story.by"
        />
    </div>
</div>
</template>

<script>
export default {
  name: 'TopStories-widget',
  props: {
    range: {
      type: Number,
      default: 10
    },
    widgetTitle: {
      type: String,
      default: 'Top 10 Stories'
    }
  },
  data () {
    return {
      isLoading: false,
      topstories: []
    }
  },
  methods: {
    getTopStories () {
      this.isLoading = true
      // eslint-disable-next-line no-undef
      axios.get('topstories.json')
        .then(result => {
          result.data.slice(0, this.range).forEach(id => {
            // eslint-disable-next-line no-undef
            axios.get('item/' + id + '.json')
              .then(result => {
                this.topstories.push(result.data)
              }).finally(res => {
                this.isLoading = false
              })
          })
        }).catch(e => console.log(e))
    }
  },
  created () {
    this.getTopStories()
  }
}
</script>

<style lang="scss" scoped>
    @import '../scss/variables';
    .topstories {
        padding: .6rem 1rem;
    }
    .topstories-des a {
    text-decoration: none !important;
      color: $secondary-color;

      &:hover {
        color: $primary-color;
      }
    }
</style>
