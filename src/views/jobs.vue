<template>
  <section class="my-4">
     <TitleHeading title="Jobs" class="mb-3">
      </TitleHeading>
       <div v-if="jobs" class="row">
        <div v-for="(job, index) in jobs" :key="index" class="col-md-4 mb-3">
          <SmallCard
            :title="job.title"
            :time="job.time"
            :link="job.url"
            :linkbtn="false"
          />
        </div>
      </div>
  </section>
</template>
<script>
import TitleHeading from '@/components/_titleheading'
import SmallCard from '@/components/_smallcard'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TotalJobs',
  metaInfo: {
    title: 'Jobs'
  },
  components: {
    TitleHeading,
    SmallCard
  },
  methods: {
    ...mapActions(['fetchJobs'])
  },
  computed: {
    ...mapGetters({ jobs: 'getJobs' })
  },
  created () {
    this.fetchJobs()
  }
}
</script>
