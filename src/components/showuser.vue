<template>
<section class="my-4">
  <div class="row">
    <div class="col-lg-8 vld-parent">
      <div v-if="profileData" class="profiledata">
            <div class="userImgText">
                <span>{{profileData.username.charAt(0).toUpperCase()}}</span>
            </div>
            <div>
                <h4>{{profileData.username.toUpperCase()}}</h4>
                <div  class="text-muted"><font-awesome-icon :icon="['fas', 'clock']" class="mr-2" />
            {{profileData.created | time_converter}}</div>
               <p  class="text-muted"> Karma: {{profileData.karma}}</p>
            </div>
      </div>
        <div id="submittedCommets" @click="fetchSubmittedData" class="my-3 vld-parent" role="tablist" aria-multiselectable="true">
            <loading :active.sync="loadingSub"
        :is-full-page="false"></loading>
            <div class="card">
                    <a data-toggle="collapse" data-parent="#submittedCommets" href="#section1ContentId" aria-expanded="true" aria-controls="section1ContentId">
                    <div class="card-header" role="tab" id="section1HeaderId">
                        Submitted Comments
                    </div>
                    </a>
                <div id="section1ContentId" class="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                    <div class="card-body">
                        <div v-for="submit in submitted"
                        :key="submit.id"
                        class="primary" role="alert">
                            <p v-html="submit.text"></p>
                        </div>
                    </div>
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
  name: 'ShowUserDetail',
  data () {
    return {
      isLoading: false,
      submitted: [],
      submittedData: null,
      profileData: {
        username: '',
        about: '',
        created: '',
        karma: 0
      },
      loadingSub: false
    }
  },
  methods: {
    getUserData () {
      // eslint-disable-next-line no-undef
      axios.get('user/' + this.$route.params.id + '.json')
        .then(res => {
          this.profileData.username = res.data.id
          this.profileData.about = res.data.about
          this.profileData.karma = res.data.karma
          //   if (res.data.submitted) {
          //     this.fetchSubmittedData(res.data.submitted)
          //   }
          this.submittedData = res.data.submitted
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchSubmittedData () {
      // eslint-disable-next-line no-unused-vars
      if (this.submitted.length > 0) return
      let itemProcessed = 0
      this.loadingSub = true
      this.submittedData.forEach(id => {
        // eslint-disable-next-line no-undef
        axios.get('/item/' + id + '.json')
          .then(res => {
            this.submitted.push(res.data)
            itemProcessed++
          }).finally(r => {
            if (itemProcessed === this.submittedData.length) {
              this.loadingSub = false
            }
          })
      })
    }
  },
  mounted () { this.getUserData() },
  metaInfo () {
    return { title: this.$route.params.id }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
.userImgText {
    background: $secondary-color;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 500;
    color: $white;
    border-radius: 40px;
    margin-right: 1rem;
}
.profiledata {
        display: flex;
    align-items: center;

}

#submittedCommets {
    .card-header {
    background: $secondary-color;
    }
    a {
        text-decoration: none;
        color: $white
    }
}
</style>
