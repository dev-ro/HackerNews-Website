<template>
  <div class="my-4">
    <section class="vld-parent">
      <loading :height="40" :active.sync="loadingJobs"
        :is-full-page="false"></loading>
      <title-heading title="Latest Jobs" class="mb-3">
        <router-link slot="rightmenu" :to="{name: 'Jobs'}">View more  <font-awesome-icon :icon="['fas', 'arrow-right']" /></router-link>
      </title-heading>
      <div class="row" v-if="jobs">
        <div v-for="(job, index) in jobs.slice(0, 8)" :key="index" class="col-md-4 mb-3">
          <SmallCard
            :title="job.title"
            :time="job.time"
            :link="job.url"
            :linkbtn="false"
          />
        </div>
      </div>
    </section>
    <section class="row my-4">
      <div class="col-lg-8 rs vld-parent mb-4">
        <title-heading title="Ask HN: " class="mb-3">
          <a slot="rightmenu" href="/">View more  <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
        </title-heading>
         <loading :active.sync="loadingaskhn"
        :is-full-page="false" :height="40"></loading>
        <div class="row" v-if="stories">
          <div v-for="(story, index) in stories.slice(0,12)" :key="index" class="col-lg-6 col-md-12 my-3">
            <StoryCard
            :title="story.title"
            :descshow="false"
            :time="story.time"
            :link='"/askhn/"+story.id'
            :createdby="story.by"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-4 stickyside">
        <top-stories />
      </div>
    </section>
  </div>
</template>

<script>

import SmallCard from '@/components/_smallcard'
import StoryCard from '@/components/_storycard'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  methods: {
    ...mapActions(['fetchJobs', 'fetchStories', 'fetchTopStories'])
  },
  computed: {
    ...mapGetters({
      jobs: 'getJobs',
      stories: 'getStories',
      topstories: 'geTopStories',
      loadingJobs: 'loadingStatus',
      loadingaskhn: 'loadingStatusAskhn'
    })
  },
  created () {
    this.fetchJobs()
    this.fetchStories()
    this.fetchTopStories()
  },
  components: {
    SmallCard,
    StoryCard
  }
}
</script>
