<template>
<section class="my-4">
  <div class="row">
    <div class="col-lg-8 vld-parent">
      <loading :active.sync="isLoading"
        :is-full-page="fullPage"></loading>
      <div v-if="detail">
      <h3 v-html="detail? detail.title : error" class="mb-3"></h3>
      <time-n-user :timestamp="detail.time"  :createdbyuser="detail.by">
        <span slot="extradet">
          <font-awesome-icon name="extraicons" :icon="['fas', 'comments']" class="mr-2"/>
          <a href="#">{{detail.descendants}} comments</a>
        </span>
        <span slot="extradet">
          <font-awesome-icon name="extraicons" :icon="['fas', 'crown']" class="mr-2"/>
          <a href="#commentsSection">{{detail.score}} score</a>
        </span>
      </time-n-user>
      <div class="my-3" v-html="detail.text"></div>
      </div>
      <div id="commentsSection">
        <div v-for="(comment, index) in detail.kids" :key="index" class="card">
          <div class="card-header">
            <h6>Comments</h6>
          </div>
          <div class="card-body">
            {{comment}}
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 stickyside">
      <top-stories />
    </div>
  </div>
</section>
</template>
<script>
export default {
  name: 'DetailPage',
  data () {
    return {
      isLoading: false,
      fullPage: false,
      detail: null,
      error: null,
      meta: {
        title: ''
      },
      submitted: [],
      profileData: []
    }
  },
  methods: {
    getDataById () {
      this.isLoading = true
      // eslint-disable-next-line no-undef
      axios.get('/item/' + this.$route.params.id + '.json')
        .then(response => {
          this.detail = response.data
          this.meta.title = response.data.title
        }).catch(e => {
          this.error = 'No result found'
        }).finally(res => { this.isLoading = false })
    }
  },
  metaInfo () {
    return {
      title: this.meta.title
    }
  },
  created () {
    this.getDataById()
  }
}
</script>

<style></style>
